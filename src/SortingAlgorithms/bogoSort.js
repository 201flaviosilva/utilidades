import { arrayShuffle, arrayIsSorted } from "../index";

/**
 * Sort given array using the Selection Sort algorithm
 * @see {@link https://pt.wikipedia.org/wiki/Bogosort}
 * 
 * @param {number[]} arr - The array to sort
 * @returns {number[]} the given array, sorted using the Selection Sort algorithm
 * @function bogoSort
 * @memberof SortingAlgorithms
 */
export function bogoSort(arr) {
	while (!arrayIsSorted(arr)) {
		arr = arrayShuffle(arr);
	}

	return arr;
}
