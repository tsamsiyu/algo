const split = function (size) {
	let bisectSize = size / 2;
	let topSplit = [[bisectSize, size - bisectSize]];
    let lSplitBisect = 2, rSplitBisect = 2;

    while (lSplitBisect > 1 && rSplitBisect > 1) {
    	const nextTopSplit = [];
    	for (let i = 0; i < topSplit.length; i++) {
            lSplitBisect = Math.floor(topSplit[i][0] / 2);
            rSplitBisect = Math.floor(topSplit[i][1] / 2);
            nextTopSplit.push([lSplitBisect, topSplit[i][0] - lSplitBisect]);
            nextTopSplit.push([rSplitBisect, topSplit[i][1] - rSplitBisect]);
		}
		topSplit = nextTopSplit;
    }

	return topSplit;
};

module.exports = function (inputs) {
	const splits = split(inputs.length);
	let offset = 0;

    console.log(inputs);
    console.log(splits);
    return;

	for (let splitI = 0; splitI < splits.length; splitI++) {
		const lSize = splits[splitI][0];
		const rSize = splits[splitI][1];

		const lIn = offset;
		const rIn = lIn + lSize;
        const lInEnd = rIn;
        const rInEnd = rIn + rSize;

		offset = rInEnd;

        const splitSize = lSize + rSize;
        let sortedSplit = new Array(splitSize);

        let lInPoint = lIn;
        let rInPoint = rIn;
        for (let s = 0; s < splitSize; s++) {
            if (rInPoint >= rInEnd) {
                sortedSplit[s] = inputs[lInPoint];
                lInPoint++;
            } else if (lInPoint >= lInEnd) {
                sortedSplit[s] = inputs[rInPoint];
                rInPoint++;
            } else {
                if (inputs[lInPoint] > inputs[rInPoint]) {
                    sortedSplit[s] = inputs[rInPoint];
                    rInPoint++;
                } else {
                    sortedSplit[s] = inputs[lInPoint];
                    lInPoint++;
                }
            }
		}

        for (let j = lIn, k = 0; k < splitSize; j++,k++) {
			inputs[j] = sortedSplit[k];
        }
    }

    console.log(inputs);

	return;

	let splitSize = 1;
	const inSize = inputs.length;
    const inHalfSize = inSize / 2;

	while (splitSize <= inHalfSize) {
		//console.log(inputs);
		//console.log('SIZE ' + splitSize);
		//console.log('')
		for (let i = 0; i < inSize; i += splitSize * 2) {
			let leftI = i;
			const leftEnd = leftI + splitSize;
			let rightI = leftEnd;
			const rightEnd = rightI + splitSize;
			let sortedSlice = new Array(splitSize * 2);
			let sliceI = 0;
			//console.log('left', leftI, leftEnd, inputs.slice(leftI, leftI+splitSize));
			//console.log('right', rightI, rightEnd, inputs.slice(rightI, rightI+splitSize));
			while (sliceI < sortedSlice.length) {
				if (rightI >= rightEnd) {
					sortedSlice[sliceI] = inputs[leftI];
					leftI++;
				} else if (leftI >= leftEnd) {
					sortedSlice[sliceI] = inputs[rightI];
					rightI++;
				} else {
					if (inputs[leftI] > inputs[rightI]) {
						sortedSlice[sliceI] = inputs[rightI];
						rightI++;
					} else {
						sortedSlice[sliceI] = inputs[leftI];
						leftI++;
					}
				}
				sliceI++;
			}
			//console.log(sortedSlice);
			for (let j=i, k=0; k<splitSize*2; j++,k++) {
				if (sortedSlice[k] !== undefined) {
					inputs[j] = sortedSlice[k];
				}
			}
			//console.log('');
		}
		splitSize = splitSize * 2;
	}
	return inputs;
};