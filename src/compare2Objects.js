/**
 * Compare if two object are equal
 * 
 * @example
 * compare2Objects({a:1, b:2}, {a: 1}); // false
 * compare2Objects({a:1, b:2}, {a: 1, b: 2 }); // true
 * 
 * @param {*} object1 - the first object/array to compare
 * @param {*} object2 - the second object/array to compare
 * @returns {boolean} - true if the two object are equal
 */
export default function compare2Objects(object1, object2) { return JSON.stringify(object1) === JSON.stringify(object2); }