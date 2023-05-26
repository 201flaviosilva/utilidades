
/**
 * 
 * Splits an array into smaller arrays of a specified size.
 * 
 * @example chunk(["A", "B", "C", "D", "E", "F", "G"], 2); // [["A", "B"], ["C", "D"], ["E", "F"], ["G"]]
 * 
 * @param {Array} array - the array to split into smaller arrays
 * @param {number} size - the number of elements to split
 * @returns an array of smaller arrays
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
