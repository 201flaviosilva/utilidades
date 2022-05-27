/**
 * Returns the lowest element from array of objects
 * 
 * @example
 * const myArray = [{a:1, b:100}, {a:10, b:50}, {a:0, b:200}]
 * findLowArrObj(myArray, "b"); // {a:10, b:50}
 * findLowArrObj(myArray, "a"); // {a:0, b:200}
 * 
 * @param {Object[]} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @returns {Object} - The lowest element in the array
 */
export function findLowArrObj(array, prop) {
	const propValues = array.map((e) => e[prop]); // Get a new array only the props
	const minPropValue = Math.min(...propValues); // Try to find the lowest value
	return array.find((e) => e[prop] === minPropValue); // Find the lowest in the array
}
