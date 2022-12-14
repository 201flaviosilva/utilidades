/**
 * Calculates a division of all givens numbers
 * 
 * @example division(1); // 1
 * @example division(1,2); // 0.5
 * @example division(1000,10) // 100
 * @example division(20,10,5); // 0.4
 * @example division(1,2,-5,2.4,-6.5,0.5); // 0.012820512820512822
 * 
 * @param  {...number} numbers - the numbers to division
 * @returns {number}
 * 
 * @function division
 * @memberof Maths
 */
export function division(...numbers) {
	if (!numbers.length) return 0;
	else if (numbers.length === 1) return numbers[0];

	let result = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		result /= numbers[i];
	}
	return result;
}
