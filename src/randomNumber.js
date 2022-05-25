import randomFloat from "./randomFloat";

/**
 * Return a random number between the given values and the given precision
 * 
 * @example
 * randomNumber(0, 1);
 * randomNumber(-10, 0, 5);
 * randomNumber(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} - random number
 */
export function randomNumber(min, max) { return randomFloat(min, max) };
