import { shuffle, isSorted } from "../Arrays/index.js";

/**
 * Sort given array using the Selection Sort algorithm
 * @see {@link https://pt.wikipedia.org/wiki/Bogosort}
 * 
 * @param {number[]} arr - The array to sort
 * @returns {number[]} the given array, sorted using the Selection Sort algorithm
 * 
 * @function bogoSort
 * @memberof SortingAlgorithms
 */
export function bogoSort(arr) {
	while (!isSorted(arr)) {
		arr = shuffle(arr);
	}

	return arr;
}
