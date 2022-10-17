/**
 * Check is the given number is a EVEN number
 * 
 * @example
 * isEven(1); // false
 * isEven(2); // true
 * 
 * @param {number} number - The number to check
 * @returns {boolean}
 * 
 * @function isEven
 * @memberof Maths
 */
export function isEven(number) { return number % 2 == 0 }

/**
 * Check is the given number is a ODD number
 * 
 * @example
 * isOdd(1); // true
 * isOdd(2); // false
 * 
 * @param {number} number - The number to check
 * @returns {boolean}
 * 
 * @function isOdd
 * @memberof Maths
 */
export function isOdd(number) { return number % 2 == 1 }
