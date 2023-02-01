/**
 * Return the value between 2 values based on a given percentage (decimal midpoint)
 * using linear interpolation.
 * 
 * @example
 * lerp(0, 0, 100); // returns 0
 * lerp(0.5, 0, 100); // returns 50
 * lerp(1, 0, 100); // returns 100
 * 
 * @param {number} value - The decimal value used for interpolation
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} The result of the interpolation
 * 
 * @see {@link https://en.wikipedia.org/wiki/Linear_interpolation} for more information on linear interpolation
 * 
 * @function lerp
 * @memberof Maths
 */
export function lerp(value, min, max) { return min + (max - min) * value; }
