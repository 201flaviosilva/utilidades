/**
 * Invert all letters from a given text
 * 
 * @example reverseString("beep"); // peeb
 * @example reverseString("Beep"); // peeB
 * @example reverseString("Beep Boop"); // pooB peeB
 * @example reverseString("beep boop 1 20"); // 02 1 poob peeb
 * 
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function reverseString(str) { return str.split("").reverse().join(""); }
