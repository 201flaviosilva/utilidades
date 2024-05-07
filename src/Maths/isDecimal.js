/**
 * Checks if a number is a decimal by verifying if it has a fractional part.
 * 
 * @example
 * isDecimal(1.5); // true
 * isDecimal(1); // false
 *
 * @param {number} number - The number to check.
 * @return {boolean} Returns true if the number is a decimal, false otherwise.
 * 
 * @function isDecimal
 * @memberof Maths
 */
export function isDecimal(number) {
	if (typeof number !== 'number' || isNaN(number) || !isFinite(number)) {
		throw new Error('Input must be a finite number');
	}
	return number % 1 !== 0;
}
