/**
 * Check if the given array is sorted fom lowest to highest
 * 
 * @example
 * isSorted([]) // true
 * isSorted([0,0,0,0]) // true
 * isSorted([2,1,4]) // false
 * isSorted([3,2,1]) // false
 * isSorted([1,2,3]) // true
 * isSorted(["B","A","D"]) // false
 * isSorted(["A","B","C"]) // true
 * 
 * @param {any} arr - the array to check
 * @returns {boolean} true if the array is sorted
 * 
 * @function isSorted
 * @memberof Array
 */
export function isSorted(arr = []) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) return false;
	}
	return true;
}
