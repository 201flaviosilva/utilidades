/**
 * Convert a number to a binary
 * 
 * @example
 * decimal2binary(42); // "101010"
 * 
 * @param {number} decimal - the number to be converted
 * @returns {string} - conversion binary string
 */
export default function decimal2Binary(decimal) { return Number(decimal).toString(2); }
