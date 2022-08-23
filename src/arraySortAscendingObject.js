/**
 * Sort a array of objects in ascending order by property
 * 
 * @param {any[]} arr - the array to sort
 * @param {string} prop - the property base to sort
 * @returns {any[]} - a new sorted array by the given property
 */
export function arraySortAscendingObject(arr, prop) { return [...arr].sort((a, b) => a[prop] - b[prop]); }
