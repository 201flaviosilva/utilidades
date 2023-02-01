/**
 * Returns an array of numbers between the `start` and `end` parameters, 
 * incrementing by the `step` parameter.
 * Optionally, the values within the specified `skip` range can be skipped.
 * 
 * @example
 * range(1, 5); // [1, 2, 3, 4, 5]
 * range(0, 100, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 * range(0, 100, 100) // [0, 100]
 * range(1, 100, 100) // [1]
 * range(0, 10, 1, [{start:2, end:8}]) // [0, 1, 9, 10]
 * range(0, 10, 1, [{start:2, end:4}, {start:7, end:8}]) // [0, 1, 5, 6, 9, 10]
 * 
 * @param {number} start - The starting point of the range
 * @param {number} end - The ending point of the range
 * @param {number} [step=1] - The increment value
 * @param {Array<{start: number, end: number}>} [skip=[]] - The range of values to skip
 * @returns {number[]} An array of numbers
 * 
 * @function range
 * @memberof Maths
 */
export function range(start, end, step = 1, skip = []) {
	const arr = [];

	for (let i = start; i < end + 1; i += step) {
		let shouldSkip = false;
		skip.forEach(({ start, end }) => {
			if (i >= start && i <= end) shouldSkip = true;
		});
		if (!shouldSkip) arr.push(i);
	}

	return arr;
}
