/**
 * Return a negative number based in the given number
 * 
 * @example
 * makeNegative(10) // -10
 * makeNegative(0) // 0
 * makeNegative(-5) // -5
 * 
 * @param {number} number - The number you want to convert
 * @returns {number} - a negative number
 */
export default function makeNegative(number) { return Math.abs(number) * -1; };
