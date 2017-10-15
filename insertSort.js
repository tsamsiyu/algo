module.exports = function (inputs) {
	var handleLength = 0;
	for (var i = 1; i < inputs.length; i++) {
		for (var j = handleLength; j > 0; j--) {
			if (inputs[i] > inputs[j]) {
				[inputs[i], inputs[j]] = [inputs[j], inputs[i]];
			} else {
				handleLength++;
				break;
			}
		}
	}
	return inputs;
}