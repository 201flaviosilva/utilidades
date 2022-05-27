/**
 * Returns a random color hexadecimal
 * 
 * @example
 * randomColor() // '#243ff4'
 * randomColor() // '#64e30f'
 * 
 * @returns {string} a new random color
 */
export function randomColor() { return "#" + (Math.random() * 0xFFFFFF << 0).toString(16); }
