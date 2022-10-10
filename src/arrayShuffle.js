import { randomInt } from "./randomNumber";
import { clone } from "./clone";

/**
 * This function will return a new array with the original items in random positions. (not change the original array)
 * 
 * @example arrayShuffle(["A", "B", "C"]); // ["B","A","C"]
 * @example arrayShuffle([1,2,3,4,5,6,7,8,9]); // [8,5,1,4,3,6,9,2,7]
 * @example arrayShuffle([{a:1},{b:2},{c:3}]); // [{a:1},{c:3},{b:2}]
 * 
 * @param {any[]} array - the array with the items to randomize
 * @returns {any[]}
 */
export function arrayShuffle(array) {
	const copy = clone(array);
	const shuffled = [];

	while (copy.length) {
		const index = randomInt(copy.length);
		shuffled.push(copy[index]);
		copy.splice(index, 1);
	}

	return shuffled;
}
