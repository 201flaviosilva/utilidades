/**
 * Calculates a multiplication of all givens numbers
 * 
 * @example multiplication(1,2); // 2
 * @example multiplication(1,2,-5,2.4,-6.5,0.5); // 78
 * @example multiplication(1,2,3,4,5,6,7,8,9,0); // 0
 * @example multiplication(-1,2,3,4,5,6,7,8,-9); // 362880
 * 
 * @param  {...number} numbers - the numbers to multiplication
 * @returns {number}
 * 
 * @function multiplication
 * @memberof Maths
 */
export function multiplication(...numbers) {
	return numbers.reduce((acc, curr) => acc * curr, 1);
}
