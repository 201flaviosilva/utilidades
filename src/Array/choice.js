import { randomInt } from "../randomNumber";

/**
 * Returns a random item from the array
 * 
 * @see {@link https://www.w3schools.com/python/ref_random_choice.asp}
 * 
 * @example choice(["A", "B", "C"]); // "B"
 * @example choice([10, 5, 123]); // 10
 * 
 * @param {any[]} array - the array to select a random item
 * @returns {any}
 */
export function choice(array) {
	return array[randomInt(array.length)];
}
