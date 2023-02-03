/**
 * Calculates the distance between two points.
 * 
 * @example calculateDistanceBetweenTwoPoints(0, 0, 3, 4); // 5
 *
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 *
 * @returns {number} The distance between two points.
 */
export function calculateDistanceBetweenTwoPoints(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

/**
 * Calculates the distance between two point objects.
 * 
 * @example calculateDistanceBetweenTwoPointObjects({ x: 0, y: 0 }, { x: 3, y: 4 }); // 5
 *
 * @param {object} point1 - The first point object with x and y properties.
 * @param {object} point2 - The second point object with x and y properties.
 *
 * @returns {number} The distance between two points.
 */
export function calculateDistanceBetweenTwoPointObjects(point1, point2) {
	return calculateDistanceBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y);
}


/**
 * Gets the distance between two circles defined by their centers.
 * 
 * @param {Object} circle1 - The first circle object.
 * @param {number} circle1.x - The x-coordinate of the center of the first circle.
 * @param {number} circle1.y - The y-coordinate of the center of the first circle.
 * @param {number} circle1.radius - The radius of the first circle.
 * 
 * @param {Object} circle2 - The second circle object.
 * @param {number} circle2.x - The x-coordinate of the center of the second circle.
 * @param {number} circle2.y - The y-coordinate of the center of the second circle.
 * @param {number} circle2.radius - The radius of the second circle.
 * 
 * @returns {number} The distance between the two circles.
 * 
 * @example
 * const circle1 = { x: 0, y: 0, radius: 5 };
 * const circle2 = { x: 10, y: 0, radius: 5 };
 * calculateDistanceBetweenCircles(circle1, circle2); // Output: 0
 * 
 * @example
 * const circle1 = { x: 0, y: 0, radius: 10 };
 * const circle2 = { x: 20, y: 0, radius: 5 };
 * calculateDistanceBetweenCircles(circle1, circle2); // Output: 5
 * 
 * @function calculateDistanceBetweenCircles
 * @memberof Physics
 */
export function calculateDistanceBetweenCircles(circle1, circle2) {
	return calculateDistanceBetweenTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) - (circle1.radius + circle2.radius);
}

/**
 * Gets the distance between two circles defined by their centers and radii.
 * 
 * @param {number} x1 - The x-coordinate of the center of the first circle.
 * @param {number} y1 - The y-coordinate of the center of the first circle.
 * @param {number} radius1 - The radius of the first circle.
 * 
 * @param {number} x2 - The x-coordinate of the center of the second circle.
 * @param {number} y2 - The y-coordinate of the center of the second circle.
 * @param {number} radius2 - The radius of the second circle.
 * 
 * @returns {number} The distance between the two circles.
 * 
 * @example calculateDistanceBetweenCirclesByCoordinates(0, 0, 5, 10, 0, 5); // Output: 0
 * @example calculateDistanceBetweenCirclesByCoordinates(0, 0, 10, 20, 0, 5); // Output: 5
 * 
 * @function calculateDistanceBetweenCirclesByCoordinates
 * @memberof Physics
 */
export function calculateDistanceBetweenCirclesByCoordinates(x1, y1, radius1, x2, y2, radius2) {
	return calculateDistanceBetweenCircles(
		{ x: x1, y: y1, radius: radius1 },
		{ x: x2, y: y2, radius: radius2 }
	);
}

/**
 * Calculates the area of overlap between two rectangles defined by their bounds.
 *
 * @param {Object} rect1 - The first rectangle.
 * @param {number} rect1.x - The x-coordinate of the top-left corner of the first rectangle.
 * @param {number} rect1.y - The y-coordinate of the top-left corner of the first rectangle.
 * @param {number} rect1.width - The width of the first rectangle.
 * @param {number} rect1.height - The height of the first rectangle.
 * @param {Object} rect2 - The second rectangle.
 * @param {number} rect2.x - The x-coordinate of the top-left corner of the second rectangle.
 * @param {number} rect2.y - The y-coordinate of the top-left corner of the second rectangle.
 * @param {number} rect2.width - The width of the second rectangle.
 * @param {number} rect2.height - The height of the second rectangle.
 * @return {number} The area of overlap between the two rectangles.
 *
 * @example
 * const rect1 = { x: 0, y: 0, width: 10, height: 10 };
 * const rect2 = { x: 5, y: 5, width: 10, height: 10 };
 * calculateOverlapBetweenRectangles(rect1, rect2); // Returns 25
 * 
 * @function calculateOverlapBetweenRectangles
 * @memberof Physics
 */
export function calculateOverlapBetweenRectangles(rect1, rect2) {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return xOverlap * yOverlap;
}

/**
 * Calculates the area of overlap between two rectangles defined by their x, y, width, and height.
 *
 * @param {number} x1 - The x-coordinate of the top-left corner of the first rectangle.
 * @param {number} y1 - The y-coordinate of the top-left corner of the first rectangle.
 * @param {number} width1 - The width of the first rectangle.
 * @param {number} height1 - The height of the first rectangle.
 * @param {number} x2 - The x-coordinate of the top-left corner of the second rectangle.
 * @param {number} y2 - The y-coordinate of the top-left corner of the second rectangle.
 * @param {number} width2 - The width of the second rectangle.
 * @param {number} height2 - The height of the second rectangle.
 * @return {number} The area of overlap between the two rectangles.
 *
 * @example calculateOverlapBetweenRectanglesByCoordinates(0, 0, 10, 10, 5, 5, 10, 10); // Returns 25
 * 
 * @function calculateOverlapBetweenRectanglesByCoordinates
 * @memberof Physics
 */
export function calculateOverlapBetweenRectanglesByCoordinates(x1, y1, width1, height1, x2, y2, width2, height2) {
	return calculateOverlapBetweenRectangles(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}
