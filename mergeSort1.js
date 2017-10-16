module.exports = function (inputs) {
    const inputsSize = inputs.length;
    let offset = 0;

    for (let splitSize = 1; splitSize <= inputsSize; splitSize *= 2) {
        const prevOffset = offset;
        let l = offset;
        let r = l + splitSize;
        offset += r + splitSize;
        const lEnd = r;
        const rEnd = offset;
        const mergeSize = splitSize * 2;
        const merge = new Array(mergeSize);

        for (let m = 0; m < mergeSize; m++) {
            if (r >= rEnd) {
                merge[m] = inputs[l];
                l++;
            } else if (l >= lEnd) {
                merge[m] = inputs[r];
                r++;
            } else {
                if (inputs[l] > inputs[l]) {
                    merge[m] = inputs[r];
                    r++;
                } else {
                    merge[m] = inputs[l];
                    l++;
                }
            }
        }

        for (let m = 0; m < mergeSize; m++) {
            inputs[m + prevOffset] = merge[m];
        }
    }

    console.log(inputs);

    return inputs;
};