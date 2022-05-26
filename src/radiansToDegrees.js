/**
 * Convert the given radians value in degrees
 * 
 * @example
 * radiansToDegrees(1.58) // 57.29577951308232
 * radiansToDegrees(2.5) // 143.2394487827058
 * 
 * @param {number} r - radians value to convert in degrees
 * @returns {number} converted the given radian in degrees
 */
export default function radiansToDegrees(r) { return r * (180 / Math.PI); }
