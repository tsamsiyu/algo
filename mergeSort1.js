module.exports = function (inputs) {
    const inputsSize = inputs.length;
    const inputsSizeHalf = inputsSize >> 1;

    console.log(inputs);

    for (let splitSize = 1; splitSize <= inputsSizeHalf; splitSize *= 2) {
        const step = splitSize * 2;
        for (let offset = 0; offset + step <= inputsSize; offset += step) {
            // console.log('');
            let l = offset;
            let r = l + splitSize;
            const lEnd = r;
            const rEnd = r+ splitSize;
            const mergeSize = splitSize * 2;
            const merge = new Array(mergeSize);

            // console.log(inputs.slice(l, l+splitSize));
            // console.log(inputs.slice(r, r+splitSize));

            for (let m = 0; m < mergeSize; m++) {
                if (r >= rEnd) {
                    merge[m] = inputs[l];
                    l++;
                } else if (l >= lEnd) {
                    merge[m] = inputs[r];
                    r++;
                } else {
                    if (inputs[l] > inputs[r]) {
                        merge[m] = inputs[r];
                        r++;
                    } else {
                        merge[m] = inputs[l];
                        l++;
                    }
                }
            }

            // console.log('merge', merge);
            for (let m = 0; m < mergeSize; m++) {
                inputs[m + offset] = merge[m];
            }
        }
    }

    console.log(inputs);

    return inputs;
};