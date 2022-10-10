/**
 * Check if all Elements of the array are equal
 * 
 * @example
 * arrayAllEqual([0,0,0,0]) // true
 * arrayAllEqual([0,0,0,1]) // false
 * arrayAllEqual([0,"a","a"]) // false
 * arrayAllEqual([[1,1],[1,1]]) // true
 * arrayAllEqual([[1,1],[1,0]]) // false
 * arrayAllEqual([{a:"b",c:1},{a:"b"}]) // false
 * arrayAllEqual([{a:"b",c:1},{a:"b",c:1}]) // true
 * arrayAllEqual([{a:"b",c:1},{a:"b",c:1},{a:"c",c:1}]) // false
 * arrayAllEqual([{a:"b",c:1},{a:"b",c:1},{a:"b",c:1}]) // true
 * 
 * @param {any} arr - the array to check all elements
 * @returns {boolean} true if all elements of the array ara equal
 */
export function arrayAllEqual(arr) { return arr.every(v => JSON.stringify(v) === JSON.stringify(arr[0])); };
