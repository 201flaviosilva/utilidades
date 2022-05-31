/**
 * Compare if both value are truthy.
 * Return true if the values are truthy.
 * 
 * @example
 * and(false, false); // false
 * and(true, false); // false
 * and(false, true); // false
 * and(true, true); // true
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */
export function and(value1, value2) { return !!value1 && !!value2 };
