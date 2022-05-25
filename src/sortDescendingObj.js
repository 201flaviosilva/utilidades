/**
 * Sort a array of objects in descending order by property
 * 
 * @param {*} arr - the array to sort
 * @param {*} prop - the property base to sort
 * @returns {Array} - a new sorted array by the given property
 */
export default function sortDescendingObj(arr, prop) { return [...arr].sort((a, b) => b[prop] - a[prop]); }
