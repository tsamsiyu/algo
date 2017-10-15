const shuffle = function (a) {
	for (let i = a.length - 1; i > 0; i--) {
	    const j = Math.floor(Math.random() * (i + 1));
	    [a[i], a[j]] = [a[j], a[i]];
	}
	return a;
};

const digits = function (from, to) {
	var res = [];
	for (var i = from; i < to; i++) {
		res.push(i);
	}
	return res;
}

const shuffleDigits = function (from, to) {
	return shuffle(digits(from, to));
}

const timer = (cb) => {
	let start = (new Date).getTime();
	cb({
		reset: () => {
			const startNow = start;
			start = (new Date).getTime();
			return start - startNow;
		}
	});
}

module.exports = {
	shuffle,
	digits,
	shuffleDigits,
	timer
};