/**
 * Re-maps a number from one range to another
 * 
 * @example
 * // map(value, fromRangeStart, fromRangeEnd, toRangeStart, toRangeEnd)
 * map(-10, 0, 100, 0, 1000) // returns -100
 * map(0, 0, 100, 0, 1000) // returns 0
 * map(10, 0, 100, 0, 1000) // returns 100
 * map(50, 0, 100, 0, 1000) // returns 500
 * map(1000, 0, 100, 0, 1000) // returns 10000
 * 
 * @param {number} value - The number to be re-mapped
 * @param {number} fromRangeStart - The start of the range the number is currently in
 * @param {number} fromRangeEnd - The end of the range the number is currently in
 * @param {number} toRangeStart - The start of the range the number should be mapped to
 * @param {number} toRangeEnd - The end of the range the number should be mapped to
 * @returns {number} - The re-mapped number
 * 
 * @function map
 * @memberof Maths
 */
export function map(value, start1, end1, start2, end2) { return (value - start1) * (end2 - start2) / (end1 - start1) + start2; }
