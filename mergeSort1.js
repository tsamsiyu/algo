module.exports = function (inputs) {
    const inputsSize = inputs.length;
    const inputsSizeHalf = inputsSize >> 1;
    let lSplit = 1, rSplit = 1;

    while (lSplit + rSplit <= inputsSize) {
        const step = lSplit + rSplit;

        for (let offset = 0; offset + step <= inputsSize; offset += step) {
            let l = offset;
            let r = l + lSplit;
            const lEnd = r;
            const rEnd = r + rSplit;
            const merge = new Array(step);

            for (let m = 0; m < step; m++) {
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

            for (let m = 0; m < step; m++) {
                inputs[m + offset] = merge[m];
            }
        }


        lSplit *= 2;

        if (lSplit < inputsSize) {
            if (lSplit > inputsSizeHalf) {
                rSplit = inputsSize - lSplit;
            } else if (lSplit) {
                rSplit = lSplit;
            }
        } else {
            break;
        }
    }

    return inputs;
};