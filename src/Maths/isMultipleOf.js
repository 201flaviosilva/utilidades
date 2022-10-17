/**
 * Check is a number is multiple of other
 * 
 * @example
 * isMultipleOf(1, 2); // false
 * isMultipleOf(1, 1); // true
 * isMultipleOf(10, 2); // true
 * isMultipleOf(0, 2); // true
 * isMultipleOf(0, 0); // false
 * isMultipleOf(7, 21); // false
 * isMultipleOf(100, 21); // false
 * isMultipleOf(15, 5); // true
 * isMultipleOf(14, 5); // false
 * 
 * @param {number} dividend - the number check is multiple
 * @param {number} divisor - divisor number
 * @returns {boolean}
 * 
 * @function isMultipleOf
 * @memberof Maths
 */
export function isMultipleOf(dividend, divisor) { return dividend % divisor == 0 }
