/**
 * Calculates a sum of all givens numbers
 * 
 * @example sum(1,1); // 2
 * @example sum(1,2,-5,2.4,-6.5); // -6.1
 * @example sum(1,2,3,4,5,6,7,8,9,0); // 45
 * @example sum(-1,2,3,4,5,6,7,8,-9); // 25
 * 
 * @param  {...number} numbers - the numbers to sum
 * @returns {number}
 * 
 * @function sum
 * @memberof Maths
 */
export function sum(...numbers) {
	return numbers.reduce((acc, curr) => acc + curr, 0);
}
