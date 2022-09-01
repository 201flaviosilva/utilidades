/**
 * @description
 * Move an array element to the right
 *
 * @example arrayMoveLeft([1,2,3,4,5]); // [5,1,2,3,4]
 * @example arrayMoveLeft([1,2,3,4,5], 2); // [4,5,1,2,3]
 * @example arrayMoveLeft(["a","b","c","d","e"], 7) // ["d","e","a","b","c"]
 * @example arrayMoveLeft(["a","b"], 3) // ["b","a"]
 *
 * @param {any[]} array - The array to move
 * @param {number} times - The number of times to move the array
 * @returns {any[]}
 */
export function arrayMoveLeft(array?: any[], times?: number): any[];
/**
 * @description
 * Move an array element to the left
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
export function arrayMoveRight(array?: any[], times?: number): any[];
