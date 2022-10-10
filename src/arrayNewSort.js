/**
 * This function creates a new sorted array using the Selection Sort algorithm
 * Don't change the original array.
 * @see {@link https://www.geeksforgeeks.org/selection-sort/}
 * 
 * @example
 * arrayIsSorted([3, 5, 1, 6, 10, 7, 2, 6]) // [1,2,3,5,6,6,7,10]
 * arrayIsSorted([0,0,0,0]) // [0,0,0,0]
 * arrayIsSorted([0,1,2,3]) // [0,1,2,3]
 * 
 * @param {number[]} arr - The array to sort
 * @returns {number[]} a new array with sorted elements
 */
export function arrayNewSort(arr) {
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
