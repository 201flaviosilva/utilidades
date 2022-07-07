/**
 * Return a copy/clone of the given array or object
 * 
 * Utils for array of object, or objects with Properties with objects, et...
 * 
 * @param {object|[]} original - the original object/array to copy/clone
 * @returns {object|[]}
 */
export function clone(original) {
	return JSON.parse(JSON.stringify(original));
}
