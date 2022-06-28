/**
 * @description
 * Move an array element to the right
 * 
 * @example arrayMoveRight([1,2,3,4,5]); // [2,3,4,5,1]
 * @example arrayMoveRight([1,2,3,4,5], 2); // [3,4,5,1,2]
 * @example arrayMoveRight(["a","b","c","d","e"], 7) // ["c","d","e","a","b"]
 * @example arrayMoveRight(["a","b"], 3) // ["b","a"]
 * 
 * @param {any[]} array - The array to move
 * @param {number} times - The number of times to move the array
 * @returns {any[]}
 */
export function arrayMoveRight(array = [], times = 1) {
	for (let t = 0; t < times; t++) {

		let last = array[array.length - 1];
		for (let i = array.length - 2; i >= 0; i--) {
			const tempValue = array[i];
			array[i] = last;
			last = tempValue;
		}
		array[array.length - 1] = last;
	}

	return array;
}
