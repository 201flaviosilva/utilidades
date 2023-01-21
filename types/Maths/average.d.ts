/**
 * Calculates a average/mean of all givens numbers
 *
 * @example average(1); // 1
 * @example average(1,2); // 1.5
 * @example average(5,4,3,6,7,3,1,8); // 4.625
 * @example average(1,2,-5,2.4,-6.5,0.5); // -0.9333333333333332
 * @example average(1,2,3,4,5,6,7,8,9); // 5
 * @example average(-1,2,3,4,5,6,7,8,-9); // 2.7777777777777777
 * @example average(...[1,2,3,4,5,6]); // 3.5
 *
 * @param  {...number} numbers - the numbers to average
 * @returns {number}
 *
 * @function average
 * @memberof Maths
 */
export function average(...numbers: number[]): number;
