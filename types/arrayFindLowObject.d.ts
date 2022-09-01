/**
 * Returns the lowest element from array of objects
 *
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * arrayFindLowObject(myArray, "b"); // {a:10, b:50}
 * arrayFindLowObject(myArray, "a"); // {a:0, b:200}
 * arrayGetMinObjects(myArray, "b", true); // 50
 * arrayGetMinObjects(myArray, "a", true); // 0
 *
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @param {boolean} [returnOnlyValue=false] - If true only returns the value of the given property with the lowest value
 * @returns {Object} - The lowest element in the array
 */
export function arrayFindLowObject(array: any[], prop: string, returnOnlyValue?: boolean): any;
/**
 *
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @returns {Object} - The lowest element in the array
 * @deprecated
 */
export function arrayFindLowObjectDeprecated(array: any[], prop: string): any;
