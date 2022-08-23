/**
 * Sort an array of number by descending
 * 
 * @example
 * const myArr = [10,4,2,7,1,0,11,4,2,3,5,8,4,3,0,6];
 * const myNewSortedArr = sortDescending(myArr); // [11,10,8,7,6,5,4,4,4,3,3,2,2,1,0,0]
 * 
 * @param {number[]} arr - the array to sort
 * @returns {number[]} A new Array sorted
 */
export function arraySortDescending(arr) { return [...arr].sort((a, b) => b - a); }
