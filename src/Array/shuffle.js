import { randomInt } from "../randomNumber";
import { clone } from "../clone";

/**
 * This function will randomize the position of the array items. (change the original array!)
 * 
 * To not mutate the original array pass in the `mutateOriginal` argument false, and this function will return a new array with the original items in random positions. (not changing the original array)
 * 
 * @example shuffle(["A", "B", "C"]); // ["B","A","C"]
 * @example shuffle([1,2,3,4,5,6,7,8,9]); // [8,5,1,4,3,6,9,2,7]
 * @example shuffle([{a:1},{b:2},{c:3}]); // [{a:1},{c:3},{b:2}]
 * 
 * @param {any[]} array - the array with the items to randomize
 * @param {boolean} mutateOriginal - the array with the items to randomize
 * @returns {any[]}
 */
export function shuffle(array, mutateOriginal = true) {
	if (mutateOriginal) return array.sort(() => Math.random() - 0.5);

	// -- Mutate the original array
	const copy = clone(array);
	const shuffled = [];

	while (copy.length) {
		const index = randomInt(copy.length);
		shuffled.push(copy[index]);
		copy.splice(index, 1);
	}

	return shuffled;
}
