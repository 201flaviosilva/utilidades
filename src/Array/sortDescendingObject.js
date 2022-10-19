/**
 * Sort a array of objects in descending order by property
 * 
 * @param {any[]} arr - the array to sort
 * @param {string} prop - the property base to sort
 * @returns {any[]} - a new sorted array by the given property
 */
export function sortDescendingObject(arr, prop) { return [...arr].sort((a, b) => b[prop] - a[prop]); }
