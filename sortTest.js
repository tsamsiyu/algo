const bubbleSort = require('./bubbleSort');
const insertSort = require('./insertSort');
const mergeSort = require('./mergeSort1');
const utils = require('./utils');

let inputs = utils.shuffleDigits(0, 5000);
let args;

utils.timer((timer) => {
	args = inputs.slice(0);
	timer.start();
	bubbleSort(args);
	console.log("Bubble Sort: " + timer.stop() + "ms");

	// insertSort(inputs.slice(0));
	// console.log(insertSort(inputs.slice(0))); // dont work
	// console.log("Insert Sort: " + timer.reset() + "ms");

	args = inputs.slice(0);
	timer.start();
	mergeSort(inputs.slice(0));
	console.log("Merge Sort: " + timer.stop() + "ms");
});
