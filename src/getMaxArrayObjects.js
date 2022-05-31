/**
 * Returns the biggest value in the array of objects based in the given property
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * getMaxArrayObjects(myArray, "b"); // 200
 * getMaxArrayObjects(myArray, "a"); // 10
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @returns {number} the biggest value in the array based in the given property
 */
export function getMaxArrayObjects(arr, prop) { return Math.max.apply(Math, arr.map(o => o[prop])); }
