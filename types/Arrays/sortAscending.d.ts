/**
 * Sort an array of number by ascending
 *
 * @example
 * const myArr = [10,4,2,7,1,0,11,4,2,3,5,8,4,3,0,6];
 * const myNewSortedArr = sortAscending(myArr); // [0,0,1,2,2,3,3,4,4,4,5,6,7,8,10,11]
 *
 * @param {number[]} arr - the array to sort
 * @param {boolean} [mutateOriginal=false] - if true will change the original array
 * @returns {number[]} A new Array sorted
 *
 * @function sortAscending
 * @memberof Arrays
 */
export function sortAscending(arr: number[], mutateOriginal?: boolean): number[];
