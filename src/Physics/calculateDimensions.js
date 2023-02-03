/**
 * Gets the area of a circle.
 * 
 * @param {number} radius - The radius of the circle.
 * 
 * @returns {number} The area of the circle.
 * 
 * @example calculateCircleArea(5); // Output: 78.53981633974483
 * @example calculateCircleArea(10); // Output: 314.1592653589793
 * 
 * @function calculateCircleArea
 * @memberof Physics
 */
export function calculateCircleArea(radius) { return Math.PI * radius * radius; }

/**
 * Gets the area of a rectangle.
 * 
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * 
 * @returns {number} The area of the rectangle.
 * 
 * @example calculateRectangleArea(5, 10); // Output: 50
 * @example calculateRectangleArea(10, 20);
 * 
 * @function calculateRectangleArea
 * @memberof Physics
 */
export function calculateRectangleArea(width, height) { return width * height; }


/**
 * Gets the perimeter of a circle.
 * 
 * @param {number} radius - The radius of the circle.
 * 
 * @returns {number} The perimeter of the circle.
 * 
 * @example calculateCirclePerimeter(5); // Output: 31.41592653589793
 * @example calculateCirclePerimeter(10); // Output: 62.83185307179586
 * 
 * @function calculateCirclePerimeter
 * @memberof Physics
 */
export function calculateCirclePerimeter(radius) { return 2 * Math.PI * radius; }

/**
 * Gets the perimeter of a rectangle.
 * 
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * 
 * @returns {number} The perimeter of the rectangle.
 * 
 * @example calculateRectanglePerimeterByDimensions(5, 10); // Output: 30
 * @example calculateRectanglePerimeterByDimensions(10, 20); // Output: 60
 * 
 * @function calculateRectanglePerimeterByDimensions
 * @memberof Physics
 */
export function calculateRectanglePerimeterByDimensions(width, height) { return 2 * (width + height); }

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
 * calculateRectanglePerimeter(rectangle); // Output: 30
 * 
 * @example
 * const rectangle = { x: 10, y: 20, width: 10, height: 20 }; 
 * calculateRectanglePerimeter(rectangle); // Output: 60
 * 
 * @function calculateRectanglePerimeter
 * @memberof Physics
 */
export function calculateRectanglePerimeter(rectangle) {
	return calculateRectanglePerimeterByDimensions(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}


/**
 * Calculates the center x-coordinate of a rectangle given its x-coordinate and width.
 * 
 * @param {number} x - The x-coordinate of the rectangle
 * @param {number} width - The width of the rectangle
 * 
 * @returns {number} The center x-coordinate of the rectangle
 * 
 * @example getRectangleCenterX(10, 20); // returns 15
 * 
 * @function getRectangleCenterX
 * @memberof Physics
 */
export function getRectangleCenterX(x, width) { return x + width / 2; }

/**
 * Calculates the center y-coordinate of a rectangle given its y-coordinate and height.
 * 
 * @param {number} y - The y-coordinate of the rectangle
 * @param {number} height - The height of the rectangle
 * 
 * @returns {number} The center y-coordinate of the rectangle
 * 
 * @example getRectangleCenterY(10, 20); // returns 15
 * 
 * @function getRectangleCenterY
 * @memberof Physics
 */
export function getRectangleCenterY(y, height) { return y + height / 2; }

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
 * @example getRectangleCenter(10, 10, 20, 20); // returns { x: 15, y: 15 }
 * 
 * @function getRectangleCenter
 * @memberof Physics
 */
export function getRectangleCenter(x, y, width, height) { return { x: getRectangleCenterX(x, width), y: getRectangleCenterY(y, height) }; }

/**
 * Calculates the center x-coordinate of a rectangle given its bounds.
 * 
 * @param {object} rectangle - An object with x, y, width, and height properties representing the bounds of the rectangle
 * 
 * @returns {number} The center x-coordinate of the rectangle
 * 
 * @example getRectangleCenterXFromBounds({ x: 10, y: 10, width: 20, height: 20 }); // returns 15
 * 
 * @function getRectangleCenterXFromBounds
 * @memberof Physics
 */
export function getRectangleCenterXFromBounds(rectangle) { return getRectangleCenterX(rectangle.x, rectangle.width); }

/**
 * Calculates the center y-coordinate of a rectangle given its bounds.
 * 
 * @param {object} rectangle - An object with x, y, width, and height properties representing the bounds of the rectangle
 * 
 * @returns {number} The center y-coordinate of the rectangle
 * 
 * @example getRectangleCenterYFromBounds({ x: 10, y: 10, width: 20, height: 20 }); // returns 15
 * 
 * @function getRectangleCenterYFromBounds
 * @memberof Physics
 */
export function getRectangleCenterYFromBounds(rectangle) { return getRectangleCenterY(rectangle.y, rectangle.height); }

/**
 * Returns the Y-coordinate of the center of a rectangle, given the rectangle's bounds.
 * 
 * @param {object} rectangle - The rectangle's bounds, represented as an object with `y` and `height` properties.
 * @returns {number} The Y-coordinate of the center of the rectangle.
 * 
 * @example
 * getRectangleCenterYFromBounds({ x: 10, y: 10, y: 10, height: 20 }); // 20
 * 
 * @function getRectangleCenterYFromBounds
 * @memberof Physics
 */
export function getRectangleCenterYFromBounds(rectangle) {
	return getRectangleCenterY(rectangle.y, rectangle.height);
}

/**
 * Returns the center of a rectangle, given the rectangle's bounds.
 * 
 * @param {object} rectangle - The rectangle's bounds, represented as an object with `x`, `y`, `width`, and `height` properties.
 * @returns {object} The center of the rectangle, represented as an object with `x` and `y` properties.
 * 
 * @example
 * const rect = { x: 10, y: 10, width: 20, height: 20 };
 * getRectangleCenterFromBounds(rect); // { x: 20, y: 20 }
 * 
 * @function getRectangleCenterFromBounds
 * @memberof Physics
 */
export function getRectangleCenterFromBounds(rectangle) {
	return getRectangleCenter(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}

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
 * @example getRectangleVertices(0, 0, 2, 3); // [{x: 0, y: 0}, {x: 2, y: 0}, {x: 2, y: 3}, {x: 0, y: 3}]
 * 
 * @function getRectangleVertices
 * @memberof Physics
 */
export function getRectangleVertices(x, y, width, height) {
	return [
		{ x: x, y: y },
		{ x: x + width, y: y },
		{ x: x + width, y: y + height },
		{ x: x, y: y + height }
	];
}

/**
 * Returns an array of objects that represent the vertices of a rectangle, given its bounds.
 * 
 * @param {Object} rectangle - An object that represents the bounds of the rectangle, with properties 'x', 'y', 'width', and 'height'.
 * 
 * @returns {Array} An array of objects that represent the vertices of the rectangle, where each object has properties 'x' and 'y'.
 * 
 * @example getVerticesFromRectangleBounds({ x: 0, y: 0, width: 2, height: 3 }); // [{x: 0, y: 0}, {x: 2, y: 0}, {x: 2, y: 3}, {x: 0, y: 3}]
 * 
 * @function getVerticesFromRectangleBounds
 * @memberof Physics
 */
export function getVerticesFromRectangleBounds(rectangle) { return getRectangleVertices(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }
