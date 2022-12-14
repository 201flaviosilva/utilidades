/**
 * Return the value between 2 value based in a given percentage (decimal midpoint)
 * 
 * @example
 * percentage(10, 100); // 10
 * percentage(40, 40); // 100
 * percentage(40, 20); // 200

 * @param {number} value - the value to compare
 * @param {number} total - total value
 * @returns {number} the result
 * 
 * @function percentage
 * @memberof Maths
 */
export function percentage(value, total) { return (100 * value) / total; }
