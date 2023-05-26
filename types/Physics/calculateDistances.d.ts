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
export function calcDistanceBetweenTwoPoints(x1: number, y1: number, x2: number, y2: number): number;
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
export function calcDistanceBetweenTwoPointObjects(point1: object, point2: object): number;
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
export function calcDistanceBetweenCircles(circle1: {
    x: number;
    y: number;
    radius: number;
}, circle2: {
    x: number;
    y: number;
    radius: number;
}): number;
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
export function calcDistanceBetweenCirclesByCoordinates(x1: number, y1: number, radius1: number, x2: number, y2: number, radius2: number): number;
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
export function calcOverlapBetweenRectangles(rect1: {
    x: number;
    y: number;
    width: number;
    height: number;
}, rect2: {
    x: number;
    y: number;
    width: number;
    height: number;
}): number;
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
export function calcOverlapBetweenRectanglesByCoordinates(x1: number, y1: number, width1: number, height1: number, x2: number, y2: number, width2: number, height2: number): number;
