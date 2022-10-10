const numberArr = [3, 5, 1, 6, 10, 7, 2, 6];

/**
 * This function creates a new array and don't change the original array.
 * 
 * @param {string|number} arr 
 * @returns 
 */
export function arraySort(arr) {
	const copyArray = [...arr];
	const sortedArr = [];

	while (copyArray.length) {
		let low = Infinity;
		let index = 0;

		for (let i = 0; i < copyArray.length; i++) {
			if (copyArray[i] < low) {
				low = copyArray[i];
				index = i;
			}
		}

		sortedArr.push(low);
		copyArray.splice(index, 1);
	}

	return sortedArr;
}

console.log(arraySort(numberArr)); // [1,2,3,5,6,6,7,10]
