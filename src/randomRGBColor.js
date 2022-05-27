import randomNumber from "./randomNumber";

/**
 * Export a random rgb color (red, green, blue)
 * 
 * @example
 * randomRGBColor() // 'rgb(67.77, 251.89, 163.64)'
 * randomRGBColor() // 'rgb(142.84, 37.61, 173.32)'
 * 
 * @returns {string}
 */
export function randomRGBColor() { return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`; }
