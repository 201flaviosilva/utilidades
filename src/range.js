/**
 * Return a array of number Between the 2 given values,
 * 
 * @example
 * range(1, 5); // [ 1, 2, 3, 4, 5 ]
 * range(0, 100, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 * range(0, 100, 100) // [0, 100]
 * range(1, 100, 100) // [1]
 * 
 * @param {number} start - start point to add numbers
 * @param {number} end - end point to stop adding numbers
 * @param {number} [step=1] - The value to increment
 * @returns {number[]} Array of number
 */
export default function range(start, end, step = 1) {
	const arr = [];
	for (let i = start; i < end + 1; i += step) arr.push(i);
	return arr;
}
