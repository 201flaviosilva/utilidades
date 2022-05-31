/**
 * Returns the biggest element from array of objects
 *
 * @example
 * const myArray = [{a:1, b:100}, {a: 0, b:50}, {a:0, b:200}]
 * findBigArrObj(myArray, "b"); // {a:0, b:200}
 * findBigArrObj(myArray, "a"); // {a:10, b:50}
 *
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @returns {Object} - The biggest element in the array
 */
export function findBigArrObj(array: any[], prop: string): any;
