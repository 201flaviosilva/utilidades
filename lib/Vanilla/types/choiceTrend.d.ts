/**
 * This function will return the index of the random selected item of a array based in the passed probably
 *
 * @example choiceTrend([0.25, 0.5, 0.25]); // 1
 * @example choiceTrend([0.5, 0.5]); // 0
 * @example choiceTrend([0.1, 0.9]); // 1
 * @example choiceTrend([0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1]); // 7
 *
 * @param {number[]} options
 * @returns {number} returns the index of the selected
 */
export function choiceTrend(options?: number[]): number;
