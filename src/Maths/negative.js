/**
 * Converts the given number to its negative equivalent, unless it's already negative or zero.
 * 
 * @example
 * negative(10) // -10
 * negative(0) // 0
 * negative(-5) // -5
 * 
 * @param {number} number - The number to be converted
 * @returns {number} - The negative equivalent of the input number, or 0 if the input was 0.
 * 
 * @function negative
 * @memberof Maths
 */
export function negative(number) {
	return number === 0 ? 0 : -Math.abs(number);
};
