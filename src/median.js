import { isEven } from "./isEvenOdd";
import { sortAscending } from "./sortAscending";

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
 */
export function median(...numbers) {
	const { length } = numbers;
	if (!length) return 0;

	sortAscending(numbers);

	if (isEven(length)) return (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
	return numbers[(length - 1) / 2];
}
