import xor from "./xor";

/**
 * Inverse of the "xor" function.
 * Return true if both values are truthy ou falsy.
 * 
 * @example
 * xnor(false, false); // true
 * xnor(true, false); // false
 * xnor(false, true); // false
 * xnor(true, true); // true
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */
export default function xnor(value1, value2) { return !xor(value1, value2) };
