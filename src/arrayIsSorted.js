/**
 * Check if the given array is sorted fom lowest to highest
 * 
 * @example
 * arrayIsSorted([]) // true
 * arrayIsSorted([0,0,0,0]) // true
 * arrayIsSorted([2,1,4]) // false
 * arrayIsSorted([3,2,1]) // false
 * arrayIsSorted([1,2,3]) // true
 * arrayIsSorted(["B","A","D"]) // false
 * arrayIsSorted(["A","B","C"]) // true
 * 
 * @param {any} arr - the array to check
 * @returns {boolean} true if the array is sorted
 */
export function arrayIsSorted(arr = []) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) return false;
	}
	return true;
}
