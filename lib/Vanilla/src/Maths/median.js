import { isEven } from "./isEvenOdd.js";
import { sortAscending } from "../Arrays/sortAscending.js";

/**
 * Returns the median of the givens numbers
 * 
 * @example median(1); // 1
 * @example median(1,2); // 1.5
 * @example median(1,2,3,4); // 2.5
 * @example median(1,2,3,4,5); // 3
 * @example median(...[1,2,3,4]); // 2.5
 * 
 * @param  {...number} numbers - the numbers to get the median
 * @returns {number}
 * 
 * @function median
 * @memberof Maths
 */
export function median(...numbers) {
	const { length } = numbers;
	if (!length) return 0;

	sortAscending(numbers, true);

	if (isEven(length)) return (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
	return numbers[(length - 1) / 2];
}
