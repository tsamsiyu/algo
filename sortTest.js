const bubbleSort = require('./bubbleSort');
const insertSort = require('./insertSort');
const mergeSort = require('./mergeSort1');
const utils = require('./utils');

const inputs = utils.shuffleDigits(0, 11);

utils.timer((timer) => {
	// bubbleSort(inputs.slice(0));
	// console.log("Bubble Sort: " + timer.reset() + "ms");
	// insertSort(inputs.slice(0));
	// console.log(insertSort(inputs.slice(0))); // dont work
	// console.log("Insert Sort: " + timer.reset() + "ms");
	mergeSort(inputs.slice(0))
	// console.log('\n', mergeSort(inputs.slice(0)));
	// console.log("Merge Sort: " + timer.reset() + "ms");
});
