/**
 * Checks if an item is in common between two arrays
 * 
 * @example
 * isItemInCommon([1, 2, 3], [2, 3, 4]); // true
 * isItemInCommon(["A", "B", "C"], ["B", "C", "D"]) // true
 * isItemInCommon([1, 2, 3], [4, 5, 6]); // false
 * 
 * @param {any[]} arr1 - The first array
 * @param {any[]} arr2 - The second array
 * @returns {boolean} true if the item is in common
 * 
 * @function isItemInCommon
 * @memberof Arrays
 */
export function isItemInCommon(arr1, arr2) {
	return arr1.some(item => arr2.includes(item));
}
