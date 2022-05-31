/**
 * Return false if both values are truthy ou falsy.
 * 
 * @example
 * xor(false, false); // false
 * xor(true, false); // true
 * xor(false, true); // true
 * xor(true, true); // false
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */
export function xor(value1, value2) { return !!value1 !== !!value2 };
