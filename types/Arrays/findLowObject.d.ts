/**
 * Returns the lowest element from array of objects
 *
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * findLowObject(myArray, "b"); // {a:10, b:50}
 * findLowObject(myArray, "a"); // {a:0, b:200}
 * findLowObject(myArray, "b", true); // 50
 * findLowObject(myArray, "a", true); // 0
 *
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @param {boolean} [returnOnlyValue=false] - If true only returns the value of the given property with the lowest value
 * @returns {Object} - The lowest element in the array
 *
 * @function findLowObject
 * @memberof Arrays
 */
export function findLowObject(array: any[], prop: string, returnOnlyValue?: boolean): any;
/**
 *
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @returns {Object} - The lowest element in the array
 *
 * @function findLowObjectDeprecated
 * @memberof Arrays
 * @deprecated
 */
export function findLowObjectDeprecated(array: any[], prop: string): any;
