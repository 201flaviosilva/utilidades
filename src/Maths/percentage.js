/**
 * Calculates the percentage of a given value in relation to a total value
 * 
 * @example
 * percentage(10, 100); // returns 10
 * percentage(40, 40); // returns 100
 * percentage(40, 20); // returns 200
 * 
 * @param {number} value - The value to be calculated as a percentage
 * @param {number} total - The total value to be used as reference
 * @returns {number} The calculated percentage
 * 
 * @function percentage
 * @memberof Maths
 */
export function percentage(value, total) { return (100 * value) / total; }
