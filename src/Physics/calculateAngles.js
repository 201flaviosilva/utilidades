import { radiansToDegrees } from "../Maths/radiansToDegrees.js";

/**
 * Calculates the angle between two points in a two-dimensional plane.
 * 
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * 
 * @returns {number} The angle between the two points, in radians.
 * 
 * @example getAngleBetweenTwoPoints(0, 0, 1, 1); // output: 0.7853981633974483 (approx. 45°)
 * @example getAngleBetweenTwoPoints(0, 0, 0, 1); // output: 1.5707963267948966 (approx. 90°)
 * 
 * @function getAngleBetweenTwoPoints
 * @memberof Physics
 */
export function getAngleBetweenTwoPoints(x1, y1, x2, y2) { return Math.atan2(y2 - y1, x2 - x1); }

/**
 * Calculates the angle between two points in a two-dimensional plane, given as instances of `Vector2`.
 * 
 * @param {Object} point1 - The first point, represented as an instance of `Vector2`.
 * @param {number} point1.x - The x-coordinate of the first point.
 * @param {number} point1.y - The y-coordinate of the first point.
 * 
 * @param {Object} point2 - The second point, represented as an instance of `Vector2`.
 * @param {number} point2.x - The x-coordinate of the second point.
 * @param {number} point2.y - The y-coordinate of the second point.
 * 
 * @returns {number} The angle between the two points, in radians.
 * 
 * @example
 * const point1 = { x: 0, y: 0 };
 * const point2 = { x: 1, y: 1 };
 * getAngleBetweenTwoPointsVector2(point1, point2); // output: 0.7853981633974483 (approx. 45°)
 * 
 * @example
 * const point1 = { x: 0, y: 0 };
 * const point2 = { x: 0, y: 1 };
 * getAngleBetweenTwoPointsVector2(point1, point2); // output: 1.5707963267948966 (approx. 90°)
 * 
 * @function getAngleBetweenTwoPointsVector2
 * @memberof Physics
 */
export function getAngleBetweenTwoPointsVector2(point1, point2) {
	return getAngleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y);
}

/**
 * Calculates the angle between two points in a two-dimensional plane, in degrees.
 * 
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * 
 * @returns {number} The angle between the two points, in degrees.
 * 
 * @example getAngleBetweenTwoPointsDegrees(0, 0, 1, 1); // output: 45
 * @example getAngleBetweenTwoPointsDegrees(0, 0, 0, 1); // output: 90
 * 
 * @function getAngleBetweenTwoPointsDegrees
 * @memberof Physics
 */
export function getAngleBetweenTwoPointsDegrees(x1, y1, x2, y2) {
	return radiansToDegrees(getAngleBetweenTwoPoints(x1, y1, x2, y2));
}

/**
 * Calculates the angle between two points in a two-dimensional plane, given as instances of `Vector2`, in degrees.
 * 
 * @param {Object} point1 - The first point, represented as an instance of `Vector2`.
 * @param {number} point1.x - The x-coordinate of the first point.
 * @param {number} point1.y - The y-coordinate of the first point.
 * 
 * @param {Object} point2 - The second point, represented as an instance of `Vector2`.
 * @param {number} point2.x - The x-coordinate of the second point.
 * @param {number} point2.y - The y-coordinate of the second point.
 * 
 * @returns {number} The angle between the two points, in degrees.
 * 
 * @example
 * const point1 = { x: 0, y: 0 };
 * const point2 = { x: 1, y: 1 };
 * getAngleBetweenTwoPointsVector2Degrees(point1, point2); // output: 45
 * 
 * @example
 * const point1 = { x: 0, y: 0 };
 * const point2 = { x: 0, y: 1 };
 * getAngleBetweenTwoPointsVector2Degrees(point1, point2); // output: 90
 * 
 * @function getAngleBetweenTwoPointsVector2Degrees
 * @memberof Physics
 */
export function getAngleBetweenTwoPointsVector2Degrees(point1, point2) {
	return getAngleBetweenTwoPointsDegrees(point1.x, point1.y, point2.x, point2.y);
}



/**
 * Calculates the angle between the centers of two rectangles, given as instances of `Rectangle`, in radians.
 * 
 * @param {Object} rect1 - The first rectangle, represented as an instance of `Rectangle`.
 * @param {number} rect1.x - The x-coordinate of the top-left corner of the first rectangle.
 * @param {number} rect1.y - The y-coordinate of the top-left corner of the first rectangle.
 * @param {number} rect1.width - The width of the first rectangle.
 * @param {number} rect1.height - The height of the first rectangle.
 * 
 * @param {Object} rect2 - The second rectangle, represented as an instance of `Rectangle`.
 * @param {number} rect2.x - The x-coordinate of the top-left corner of the second rectangle.
 * @param {number} rect2.y - The y-coordinate of the top-left corner of the second rectangle.
 * @param {number} rect2.width - The width of the second rectangle.
 * @param {number} rect2.height - The height of the second rectangle.
 * 
 * @returns {number} The angle between the centers of the two rectangles, in radians.
 * 
 * @example
 * const rect1 = { x: 0, y: 0, width: 2, height: 2 };
 * const rect2 = { x: 2, y: 2, width: 2, height: 2 };
 * calculateAngleBetweenRectangles(rect1, rect2); // output: 0.7853981633974483
 * 
 * @example
 * const rect1 = { x: 0, y: 0, width: 2, height: 2 };
 * const rect2 = { x: 1, y: 2, width: 2, height: 2 };
 * calculateAngleBetweenRectangles(rect1, rect2); // output: 1.1071487177940904
 * 
 * @function calculateAngleBetweenRectangles
 * @memberof Physics
 */
export function calculateAngleBetweenRectangles(rect1, rect2) {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return Math.atan2(yOverlap, xOverlap);
}

/**
 * Gets the angle between two rectangles defined by their coordinates.
 * 
 * @param {number} x1 - The x-coordinate of the first rectangle.
 * @param {number} y1 - The y-coordinate of the first rectangle.
 * @param {number} width1 - The width of the first rectangle.
 * @param {number} height1 - The height of the first rectangle.
 * @param {number} x2 - The x-coordinate of the second rectangle.
 * @param {number} y2 - The y-coordinate of the second rectangle.
 * @param {number} width2 - The width of the second rectangle.
 * @param {number} height2 - The height of the second rectangle.
 * 
 * @returns {number} The angle between the two rectangles.
 * 
 * @example calculateAngleBetweenRectanglesByCoordinates(0, 0, 10, 10, 20, 20, 20, 20); // Output: 45
 * @example calculateAngleBetweenRectanglesByCoordinates(10, 10, 10, 10, 30, 30, 20, 20); // Output: 30
 * 
 * @function calculateAngleBetweenRectanglesByCoordinates
 * @memberof Physics
 */
export function calculateAngleBetweenRectanglesByCoordinates(x1, y1, width1, height1, x2, y2, width2, height2) {
	return calculateAngleBetweenRectangles(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}
