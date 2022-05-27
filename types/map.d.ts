/**
 * Re-maps a number from one range to another
 * @see {@link https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56#gistcomment-2951694}
 *
 * @example
 * //     value, range1, range2
 * // map(value, x1, y1, x2, y2)
 * map(-10, 0, 100, 0, 1000); // -100
 * map(0, 0, 100, 0, 1000); // 0
 * map(10, 0, 100, 0, 1000); // 100
 * map(50, 0, 100, 0, 1000); // 500
 * map(1000, 0, 100, 0, 1000) // 10000
 *
 * @param {number} value
 * @param {number} start1 - Start of the range 1
 * @param {number} end1 - End of the range 1
 * @param {number} start2 - Start of the range 2
 * @param {number} end2 - End of the range 2
 * @returns {number} the value un the range
 */
export function map(value: number, start1: number, end1: number, start2: number, end2: number): number;
