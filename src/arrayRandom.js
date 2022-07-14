/**
 * This function will randomize the position of the array items. (change the original array!)
 * 
 * @example arrayRandom(["A", "B", "C"]); // ["B","A","C"]
 * @example arrayRandom([1,2,3,4,5,6,7,8,9]); // [8,5,1,4,3,6,9,2,7]
 * @example arrayRandom([{a:1},{b:2},{c:3}]); // [{a:1},{c:3},{b:2}]
 * 
 * @param {any[]} array - the array with the items to randomize
 * @returns {any[]} the array changed
 */
export function arrayRandom(array) {
	return array.sort(() => Math.random() - 0.5);;
}
