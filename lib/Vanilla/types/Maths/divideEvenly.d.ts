/**
 * Returns a array with the dived evenly between the two numbers
 *
 * @example divideEvenly(); // [0, 2.5, 5, 7.5, 10]
 * @example divideEvenly(0, 10, 2); // [0, 10]
 * @example divideEvenly(-45, 45, 3); // [-45, 0, 45]
 *
 * @param {number} [min=0] The minimum value to return.
 * @param {number} [max=10] The maximum value to return.
 * @param {number} [numberDivisions=5] The number of divisions to use.
 * @returns {number[]} An array of evenly spaced numbers.
 *
 * @function divideEvenly
 * @memberof Maths
 */
export function divideEvenly(min?: number, max?: number, numberDivisions?: number): number[];
