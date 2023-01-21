/**
 * Convertes the given number in a negative number
 * 
 * @example negative(5); // -5
 * @example negative(-35); // -35
 * 
 * @param {number} num - number to convert
 * @returns {number} fixed number
 * 
 * @function negative
 * @memberof Maths
 */
export function negative(num) { return Math.abs(num) * -1; }
