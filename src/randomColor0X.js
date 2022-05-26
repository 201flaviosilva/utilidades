/**
 * Returns a random color hexadecimal
 * 
 * @example
 * randomColor0X() // '0x53df30'
 * randomColor0X() // '0x7c2f15'
 * 
 * @returns {string} a new random color
 */
export default function randomColor0X() { return `0x${Math.floor(Math.random() * 16777215).toString(16)}`; }
