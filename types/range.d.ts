/**
 * Return a array of number Between the 2 given values,
 *
 * @example range(1, 5); // [ 1, 2, 3, 4, 5 ]
 * @example range(0, 100, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 * @example range(0, 100, 100) // [0, 100]
 * @example range(1, 100, 100) // [1]
 * @example range(0, 10, 1, [{start:2,end:8}]) // [0, 1, 9, 10]
 * @example range(0, 10, 1, [{start:2,end:4}, {start:7,end:8},]) // [0, 1, 5, 6, 9, 10]
 *
 * @param {number} start - start point to add numbers
 * @param {number} end - end point to stop adding numbers
 * @param {number} [step=1] - The value to increment
 * @param {number[]} [skip=[]] - The values to skip
 * @returns {number[]} Array of number
 */
export function range(start: number, end: number, step?: number, skip?: number[]): number[];
