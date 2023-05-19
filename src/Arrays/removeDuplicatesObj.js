/**
 * Removes duplicates from an array of objects based on a specified property.
 * 
 * @example
 * const array = [
 * {id:1,name:"John"},
 * {id:2,name:"Jane"},
 * {id:3,name:"John"},
 * {id:4,name:"Mike"},
 * {id:5,name:"Jane"}
 * ];
 * removeDuplicates(array, "name"); // [{id:1,name:"John"}, {id:2,name:"Jane"}, {id:4,name:"Mike"}]
 * 
 * 
 * @param {Array} array - The array of objects.
 * @param {string} property - The property to check for duplicates.
 * @returns {Array} - A new array with duplicate objects removed.
 * 
 * @function removeDuplicatesObj
 * @memberof Arrays
 */
export function removeDuplicatesObj(array, property) {
	const uniqueValues = new Set();
	return array.filter(obj => {
		const value = obj[property];

		if (!uniqueValues.has(value)) {
			uniqueValues.add(value);
			return true;
		}

		return false;
	});
}
