/**
 * Check if the given value is a valid number
 * 
 * @example
 * isValidNumber(42);  // true
 * isValidNumber(0);   // true
 * isValidNumber(-1);  // true
 * isValidNumber(3.14);// true
 * isValidNumber(NaN); // false
 * isValidNumber(null);// false
 * isValidNumber();    // false
 * isValidNumber("42"); // false
 * 
 * @param {number} number - number to validate
 * @returns a boolean
 * 
 * @function isValidNumber
 * @memberof Maths
 */
export function isValidNumber(number) {
	return typeof number === "number" && !isNaN(number);
}
