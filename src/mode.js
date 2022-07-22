/**
 * Returns the most repeated number
 * 
 * @example mode(1,2,2,3,4) // 2
 * 
 * @param  {...any} numbers - the numbers to get the median
 * @returns {number}
 */
export function mode(...numbers) {
	const mode = {};
	let max = 0;
	let count = 0;

	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i];

		if (mode[num]) mode[num]++;
		else mode[num] = 1;

		if (count < mode[num]) {
			max = num;
			count = mode[num];
		}
	}

	return max;
}
