/**
 * @typedef {Object} Point
 * @property {number} x - The X Coordinate
 * @property {number} y - The Y Coordinate
 */

/**
 * Calculates de position (x,y) of a object based in the angle and distance
 * 
 * @example
 * getPositionWithAngleDistance(10, 100); // { x: -83.90715290764524, y: -54.40211108893698 }
 * 
 * @param {number} angle - the angle to evaluate
 * @param {number} distance - the distance to evaluate
 * @param {Object} [origin] - origin position to analyze
 * @param {number} [origin.x=0] - x axis value
 * @param {number} [origin.y=0] - y axis value
 * @returns {Point} position {x:number,y:number} the x and y position
 */
export function getPositionWithAngleDistance(angle, distance, origin = { x: 0, y: 0 }) {
	return {
		x: distance * Math.cos(angle) + origin.x,
		y: distance * Math.sin(angle) + origin.y,
	};
}
