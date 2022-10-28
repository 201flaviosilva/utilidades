/**
 * 
 * @example
 * degreesToRadians(0) // 0
 * degreesToRadians(90) // 1.5707963267948966
 * degreesToRadians(500) // 8.726646259971648
 * 
 * @param {number} d - the degrees value to convert in radians
 * @returns {number} converted the given degrees in radian
 * 
 * @function degreesToRadians
 * @memberof Maths
 */
export function degreesToRadians(d) { return d * (Math.PI / 180); }
