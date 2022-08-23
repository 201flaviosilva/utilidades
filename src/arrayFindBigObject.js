
/**
 * Returns the biggest element from array of objects
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a: 0, b:50}, {a:0, b:200}]
 * arrayFindBigObject(myArray, "b"); // {a:0, b:200}
 * arrayFindBigObject(myArray, "a"); // {a:10, b:50}
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @returns {Object} - The biggest element in the array
 */
export function arrayFindBigObject(array, prop) {
	const propValues = array.map((e) => e[prop]); // Get a new array only the props
	const minPropValue = Math.max(...propValues); // Try to find the biggest value
	return array.find((e) => e[prop] === minPropValue); // Find the biggest in the array
}
