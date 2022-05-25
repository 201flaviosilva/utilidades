/**
 * If the value is greater than the maximum, returns the maximum.
 * If the value is less than the minimum, returns the minimum.
 * If not, return the passed value.
 * 
 * @example
 * clamp(-10, 0, 100); // 0
 * clamp(0, 0, 100); // 0
 * clamp(50, 0, 100); // 50
 * clamp(100, 0, 100); // 100
 * clamp(200, 0, 100); // 100
 * 
 * @param {number} value - The value to check
 * @param {number} [min=0] - Minimum value
 * @param {number} [max=1] - Maximum value
 * @returns {number} The fixed value
 */
export default function clamp(value, min = 0, max = 1) { return Math.min(max, Math.max(min, value)); }
