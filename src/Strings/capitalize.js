/**
 * Capitalizes the first letter of a string.
 *
 * @example
 * capitalize("hello"); // "Hello"
 * capitalize("world"); // "World"
 * 
 * @param {string} input - The string to capitalize.
 * 
 * @returns {string} - The capitalized string.
 * 
 * @throws {TypeError} - If the input is not a string.
 * 
 * @function capitalize
 * @memberof Strings
 */
export function capitalize(input) {
	if (typeof input !== "string") throw new TypeError("Input must be a string");

	if (input.length === 0) return "";

	return input.charAt(0).toUpperCase() + input.slice(1);
}
