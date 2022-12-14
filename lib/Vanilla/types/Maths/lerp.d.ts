/**
 * Return the value between 2 value based in a given percentage (decimal midpoint)
 *
 * @example
 * lerp(0, 0, 100); // 0
 * lerp(0.5, 0, 100); // 50
 * lerp(1, 0, 100); // 100

 * @param {number} value - The value (decimal point)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} The result of the function
 * @see {@link https://en.wikipedia.org/wiki/Linear_interpolation}
 *
 * @function lerp
 * @memberof Maths
 */
export function lerp(value: number, min: number, max: number): number;
