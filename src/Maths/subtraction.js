/**
 * Calculates a subtraction of all givens numbers
 * 
 * @example subtraction(1); // 1
 * @example subtraction(1,2); // -1
 * @example subtraction(1,2,-5,2.4,-6.5,0.5); // 7.6
 * @example subtraction(1,2,3,4,5,6,7,8,9,0); // -43
 * @example subtraction(-1,2,3,4,5,6,7,8,-9); // -27
 * 
 * @param  {...number} numbers - the numbers to subtraction
 * @returns {number}
 * 
 * @function subtraction
 * @memberof Maths
 */
export function subtraction(...numbers) {
	if (!numbers.length) return 0;
	else if (numbers.length === 1) return numbers[0];

	let result = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		result -= numbers[i];
	}
	return result;
}
