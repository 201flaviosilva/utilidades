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
