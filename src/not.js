/**
 * Return the boolean inverse of the given value
 * 
 * @example
 * not(true) // false
 * not(false) // true
 * not(0) // true
 * not(1) // false
 * not("") // true
 * not("something") // false
 * not([]) // false
 * not({}) // false
 * 
 * @param {any} value - value to convert in boolean and convert
 * @returns {boolean} converted value
 */
export default function not(value) { return !value };
