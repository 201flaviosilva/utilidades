/**
 * @description
 * Move an array element to the right
 *
 * @example moveLeft([1,2,3,4,5]); // [2,3,4,5,1]
 * @example moveLeft([1,2,3,4,5], 2); // [3,4,5,1,2]
 * @example moveLeft(["a","b","c","d","e"], 7) // ["c","d","e","a","b"]
 * @example moveLeft(["a","b"], 3) // ["b","a"]
 *
 * @param {any[]} array - The array to move
 * @param {number} times - The number of times to move the array
 * @returns {any[]}
 *
 * @function moveLeft
 * @memberof Arrays
 */
export function moveLeft(array?: any[], times?: number): any[];
/**
 * @description
 * Move an array element to the left
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
 * @function moveRight
 * @memberof Array
 */
export function moveRight(array?: any[], times?: number): any[];
