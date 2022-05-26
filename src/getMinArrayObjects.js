/**
 * Returns the lowest value in the array of objects based in the given property
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * findLowArrObj(myArray, "b"); // 50
 * findLowArrObj(myArray, "a"); // 0
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @returns {number} the lowest value in the array based in the given property
 */
export default function getMinArrayObjects(arr, prop) { return Math.min.apply(Math, arr.map(o => o[prop])); }
