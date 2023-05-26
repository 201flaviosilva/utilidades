/**
 * Gets the area of a circle.
 *
 * @param {number} radius - The radius of the circle.
 *
 * @returns {number} The area of the circle.
 *
 * @example calcCircleArea(5); // Output: 78.53981633974483
 * @example calcCircleArea(10); // Output: 314.1592653589793
 *
 * @function calcCircleArea
 * @memberof Physics
 */
export function calcCircleArea(radius: number): number;
/**
 * Gets the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 *
 * @returns {number} The area of the rectangle.
 *
 * @example calcRectangleArea(5, 10); // Output: 50
 * @example calcRectangleArea(10, 20);
 *
 * @function calcRectangleArea
 * @memberof Physics
 */
export function calcRectangleArea(width: number, height: number): number;
/**
 * Gets the perimeter of a circle.
 *
 * @param {number} radius - The radius of the circle.
 *
 * @returns {number} The perimeter of the circle.
 *
 * @example calcCirclePerimeter(5); // Output: 31.41592653589793
 * @example calcCirclePerimeter(10); // Output: 62.83185307179586
 *
 * @function calcCirclePerimeter
 * @memberof Physics
 */
export function calcCirclePerimeter(radius: number): number;
/**
 * Gets the perimeter of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 *
 * @returns {number} The perimeter of the rectangle.
 *
 * @example calcRectanglePerimeterByDimensions(5, 10); // Output: 30
 * @example calcRectanglePerimeterByDimensions(10, 20); // Output: 60
 *
 * @function calcRectanglePerimeterByDimensions
 * @memberof Physics
 */
export function calcRectanglePerimeterByDimensions(width: number, height: number): number;
/**
 * Gets the perimeter of a rectangle defined by its bounds.
 *
 * @param {Object} rectangle - The rectangle bounds object.
 * @param {number} rectangle.x - The x-coordinate of the rectangle.
 * @param {number} rectangle.y - The y-coordinate of the rectangle.
 * @param {number} rectangle.width - The width of the rectangle.
 * @param {number} rectangle.height - The height of the rectangle.
 *
 * @returns {number} The perimeter of the rectangle.
 *
 * @example
 * const rectangle = { x: 0, y: 0, width: 5, height: 10 };
 * calcRectanglePerimeter(rectangle); // Output: 30
 *
 * @example
 * const rectangle = { x: 10, y: 20, width: 10, height: 20 };
 * calcRectanglePerimeter(rectangle); // Output: 60
 *
 * @function calcRectanglePerimeter
 * @memberof Physics
 */
export function calcRectanglePerimeter(rectangle: {
    x: number;
    y: number;
    width: number;
    height: number;
}): number;
/**
 * Calculates the center x-coordinate of a rectangle given its x-coordinate and width.
 *
 * @param {number} x - The x-coordinate of the rectangle
 * @param {number} width - The width of the rectangle
 *
 * @returns {number} The center x-coordinate of the rectangle
 *
 * @example calcRectangleCenterX(10, 20); // returns 15
 *
 * @function calcRectangleCenterX
 * @memberof Physics
 */
export function calcRectangleCenterX(x: number, width: number): number;
/**
 * Calculates the center y-coordinate of a rectangle given its y-coordinate and height.
 *
 * @param {number} y - The y-coordinate of the rectangle
 * @param {number} height - The height of the rectangle
 *
 * @returns {number} The center y-coordinate of the rectangle
 *
 * @example calcRectangleCenterY(10, 20); // returns 15
 *
 * @function calcRectangleCenterY
 * @memberof Physics
 */
export function calcRectangleCenterY(y: number, height: number): number;
/**
 * Calculates the center coordinates of a rectangle given its x-coordinate, y-coordinate, width, and height.
 *
 * @param {number} x - The x-coordinate of the rectangle
 * @param {number} y - The y-coordinate of the rectangle
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 *
 * @returns {object} An object with x and y properties representing the center coordinates of the rectangle
 *
 * @example calcRectangleCenter(10, 10, 20, 20); // returns { x: 15, y: 15 }
 *
 * @function calcRectangleCenter
 * @memberof Physics
 */
export function calcRectangleCenter(x: number, y: number, width: number, height: number): object;
/**
 * Calculates the center x-coordinate of a rectangle given its bounds.
 *
 * @param {object} rectangle - An object with x, y, width, and height properties representing the bounds of the rectangle
 *
 * @returns {number} The center x-coordinate of the rectangle
 *
 * @example calcRectangleCenterXFromBounds({ x: 10, y: 10, width: 20, height: 20 }); // returns 15
 *
 * @function calcRectangleCenterXFromBounds
 * @memberof Physics
 */
export function calcRectangleCenterXFromBounds(rectangle: object): number;
/**
 * Returns the Y-coordinate of the center of a rectangle, given the rectangle's bounds.
 *
 * @param {object} rectangle - The rectangle's bounds, represented as an object with `y` and `height` properties.
 * @returns {number} The Y-coordinate of the center of the rectangle.
 *
 * @example calcRectangleCenterYFromBounds({ x: 10, y: 10, y: 10, height: 20 }); // 20
 * @example calcRectangleCenterYFromBounds({ x: 10, y: 10, width: 20, height: 20 }); // returns 15
 *
 * @function calcRectangleCenterYFromBounds
 * @memberof Physics
 */
export function calcRectangleCenterYFromBounds(rectangle: object): number;
/**
 * Returns the center of a rectangle, given the rectangle's bounds.
 *
 * @param {object} rectangle - The rectangle's bounds, represented as an object with `x`, `y`, `width`, and `height` properties.
 * @returns {object} The center of the rectangle, represented as an object with `x` and `y` properties.
 *
 * @example
 * const rect = { x: 10, y: 10, width: 20, height: 20 };
 * calcRectangleCenterFromBounds(rect); // { x: 20, y: 20 }
 *
 * @function calcRectangleCenterFromBounds
 * @memberof Physics
 */
export function calcRectangleCenterFromBounds(rectangle: object): object;
/**
 * Returns an array of objects that represent the vertices of a rectangle.
 *
 * @param {number} x - The x-coordinate of the top-left corner of the rectangle.
 * @param {number} y - The y-coordinate of the top-left corner of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 *
 * @returns {Array} An array of objects that represent the vertices of the rectangle, where each object has properties 'x' and 'y'.
 *
 * @example calcRectangleVertices(0, 0, 2, 3); // [{x: 0, y: 0}, {x: 2, y: 0}, {x: 2, y: 3}, {x: 0, y: 3}]
 *
 * @function calcRectangleVertices
 * @memberof Physics
 */
export function calcRectangleVertices(x: number, y: number, width: number, height: number): any[];
/**
 * Returns an array of objects that represent the vertices of a rectangle, given its bounds.
 *
 * @param {Object} rectangle - An object that represents the bounds of the rectangle, with properties 'x', 'y', 'width', and 'height'.
 *
 * @returns {Array} An array of objects that represent the vertices of the rectangle, where each object has properties 'x' and 'y'.
 *
 * @example calcVerticesFromRectangleBounds({ x: 0, y: 0, width: 2, height: 3 }); // [{x: 0, y: 0}, {x: 2, y: 0}, {x: 2, y: 3}, {x: 0, y: 3}]
 *
 * @function calcVerticesFromRectangleBounds
 * @memberof Physics
 */
export function calcVerticesFromRectangleBounds(rectangle: any): any[];
