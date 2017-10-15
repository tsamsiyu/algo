module.exports = function (inputs) {
	let handleLength = inputs.length;
	while (handleLength > 0) {
		for (let i = 0; i < handleLength; i++) {
			if (inputs[i] > inputs[i+1]) {
				[inputs[i], inputs[i+1]] = [inputs[i+1], inputs[i]];
			}
		}
		--handleLength;
	}
	return inputs;
};