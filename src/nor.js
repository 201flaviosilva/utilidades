import { or } from "./or.js";

/**
 * Inverse of the "or" function.
 * Compare if both values are falsy.
 * Return true if both are falsy.
 * 
 * @example
 * nor(false, false); // true
 * nor(true, false); // false
 * nor(false, true); // false
 * nor(true, true); // false
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */
export function nor(value1, value2) { return !or(value1, value2) };
