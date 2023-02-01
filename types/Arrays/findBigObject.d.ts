/**
 * Returns the biggest element of a array of objects.
 *
 * @example
 * const myArray = [{a:1, b:100}, {a: 0, b:50}, {a:0, b:200}]
 * findBigObject(myArray, "b"); // {a:0, b:200}
 * findBigObject(myArray, "a"); // {a:1, b:100}
 * findBigObject(myArray, "b", true); // 200
 * findBigObject(myArray, "a", true); // 1
 *
 * @param {any[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @param {boolean} [returnOnlyValue=false] - If true only returns the value of the given property with the biggest value
 * @returns {any|number} - The biggest element in the array
 *
 * @function findBigObject
 * @memberof Arrays
 */
export function findBigObject(array: any[], prop: string, returnOnlyValue?: boolean): any | number;
/**
 *
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @returns {Object} - The biggest element in the array
 *
 * @function findBigObjectDeprecated
 * @memberof Arrays
 * @deprecated
 */
export function findBigObjectDeprecated(array: any[], prop: string): any;
