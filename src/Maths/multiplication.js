/**
 * Calculates the product of all given numbers
 * 
 * @example
 * multiplication(1, 2); // returns 2
 * multiplication(1, 2, -5, 2.4, -6.5, 0.5); // returns 78
 * multiplication(1, 2, 3, 4, 5, 6, 7, 8, 9, 0); // returns 0
 * multiplication(-1, 2, 3, 4, 5, 6, 7, 8, -9); // returns 362880
 * multiplication(...[-1, 2, 3, 4, 5, 6, 7, 8, -9]); // returns 362880
 * 
 * @param {...number} numbers - The numbers to be multiplied
 * @returns {number} The product of all given numbers
 * 
 * @function multiplication
 * @memberof Maths
 */
export function multiplication(...numbers) {
	return numbers.reduce((acc, curr) => acc * curr, 1);
}
