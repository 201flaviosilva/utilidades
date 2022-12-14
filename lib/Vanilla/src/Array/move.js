/**
 * @description
 * Move an array element to the right
 * 
 * @example moveLeft([1,2,3,4,5]); // [5,1,2,3,4]
 * @example moveLeft([1,2,3,4,5], 2); // [4,5,1,2,3]
 * @example moveLeft(["a","b","c","d","e"], 7) // ["d","e","a","b","c"]
 * @example moveLeft(["a","b"], 3) // ["b","a"]
 * 
 * @param {any[]} array - The array to move
 * @param {number} times - The number of times to move the array
 * @returns {any[]}
 * 
 * @function moveLeft
 * @memberof Array
 */
export function moveLeft(array = [], times = 1) {
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

/**
 * @description
 * Move an array element to the left
 * 
* @example moveRight([1,2,3,4,5]); // [2,3,4,5,1]
 * @example moveRight([1,2,3,4,5], 2); // [3,4,5,1,2]
 * @example moveRight(["a","b","c","d","e"], 7) // ["c","d","e","a","b"]
 * @example moveRight(["a","b"], 3) // ["b","a"]
 * 
 * @param {any[]} array - The array to move
 * @param {number} times - The number of times to move the array
 * @returns {any[]}
 * 
 * @function moveRight
 * @memberof Array
 */
export function moveRight(array = [], times = 1) {
	for (let t = 0; t < times; t++) {

		let last = array[0]; // temp variable to store last changed value
		for (let i = 1; i < array.length; i++) {
			const tempValue = array[i]; // temp variable to store the current value
			array[i] = last; // update the value in the current position
			last = tempValue; // update the last changed value
		}
		array[0] = last; // put the last changed value in the first position
	}

	return array;
}
