/**
 * The factorial of a non-negative​ number is computed as the product of all integers between 1 and the number itself
 * 
 * @see {@link https://en.wikipedia.org/wiki/Factorial}
 * 
 * @example factorial(0); // 0
 * @example factorial(1); // 1
 * @example factorial(1.2); // 0.23999999999999994
 * @example factorial(4); // 24
 * @example factorial(6); // 720
 * @example factorial(10); // 3628800
 * 
 * @param {number} number - the number to factoring
 * @returns {number} the result
 * 
 * @function factorial
 * @memberof Maths
 */
export function factorial(number) {
	if (number <= 1) return number;
	return number * factorial(number - 1);
}
