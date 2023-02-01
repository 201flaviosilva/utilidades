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
export function median(...numbers: number[]): number;
