/**
 * Check is the given object is empty
 * 
 * @example
 * isObjectEmpty({}); // true
 * isObjectEmpty({beep: "beep"}); // false
 * 
 * @param {Object} obj - The object to check
 * @returns {boolean}
 */
export function isObjectEmpty(obj) { return Object.keys(obj).length === 0; }
