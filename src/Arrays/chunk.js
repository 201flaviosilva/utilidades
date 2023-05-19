
/**
 * 
 * Splits an array into smaller arrays of a specified size.
 * 
 * @example chunk(["A", "B", "C", "D", "E", "F", "G"], 2); // [["A", "B"], ["C", "D"], ["E", "F"], ["G"]]
 * 
 * @param {any[]} array 
 * @param {number} size 
 * @returns 
 * 
 * @function chunk
 * @memberof Arrays
 */
export function chunk(array, size = 1) {
	const chunkedArray = [];

	for (let i = 0; i < array.length; i += size) {
		chunkedArray.push(array.slice(i, i + size));
	}

	return chunkedArray;
}
