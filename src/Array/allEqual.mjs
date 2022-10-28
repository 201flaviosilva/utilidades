/**
 * Check if all Elements of the array are equal
 * 
 * @example
 * allEqual([0,0,0,0]) // true
 * allEqual([0,0,0,1]) // false
 * allEqual([0,"a","a"]) // false
 * allEqual([[1,1],[1,1]]) // true
 * allEqual([[1,1],[1,0]]) // false
 * allEqual([{a:"b",c:1},{a:"b"}]) // false
 * allEqual([{a:"b",c:1},{a:"b",c:1}]) // true
 * allEqual([{a:"b",c:1},{a:"b",c:1},{a:"c",c:1}]) // false
 * allEqual([{a:"b",c:1},{a:"b",c:1},{a:"b",c:1}]) // true
 * 
 * @param {any} arr - the array to check all elements
 * @returns {boolean} true if all elements of the array ara equal
 * 
 * @function allEqual
 * @memberof Array
 */
export function allEqual(arr) { return arr.every(v => JSON.stringify(v) === JSON.stringify(arr[0])); };
