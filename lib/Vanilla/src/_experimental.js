// Points
export function distanceTwoPoints(x1, y1, x2, y2) { return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)); }
export function distanceTwoPointsVector2(point1, point2) { return distanceTwoPoints(point1.x, point1.y, point2.x, point2.y); }

export function angleBetweenTwoPoints(x1, y1, x2, y2) { return Math.atan2(y2 - y1, x2 - x1); }
export function angleBetweenTwoPointsVector2(point1, point2) { return angleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y); }
export function angleBetweenTwoPointsDegrees(x1, y1, x2, y2) { return angleBetweenTwoPointsRadians(x1, y1, x2, y2) * 180 / Math.PI; }
export function angleBetweenTwoPointsVector2Degrees(point1, point2) { return angleBetweenTwoPointsDegrees(point1.x, point1.y, point2.x, point2.y); }

// Circles
export function distanceBetweenTwoCirclesFromCircle(circle1, circle2) {
	return distanceTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) - (circle1.radius + circle2.radius);
}
export function distanceBetweenTwoCircles(x1, y1, radius1, x2, y2, radius2) {
	return distanceBetweenTwoCirclesFromCircle(
		{ x: x1, y: y1, radius: radius1 },
		{ x: x2, y: y2, radius: radius2 }
	);
}

export function circleArea(radius) { return Math.PI * radius * radius; }
export function circlePerimeter(radius) { return 2 * Math.PI * radius; }

// Rectangles
export function distanceBetweenTwoRectanglesFromBounds(rect1, rect2) {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return xOverlap * yOverlap;
}
export function distanceBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
	return distanceBetweenTwoRectanglesFromBounds(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}

export function angleBetweenTwoRectanglesFromBounds(rect1, rect2) {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return Math.atan2(yOverlap, xOverlap);
}
export function angleBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
	return angleBetweenTwoRectanglesFromBounds(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}

export function rectangleArea(width, height) { return width * height; }
export function rectanglePerimeter(width, height) { return 2 * (width + height); }
export function rectanglePerimeterFromBounds(rectangle) { return rectanglePerimeter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

export function rectangleVertices(x, y, width, height) {
	return [
		{ x: x, y: y },
		{ x: x + width, y: y },
		{ x: x + width, y: y + height },
		{ x: x, y: y + height }
	];
}
export function rectangleVerticesFromBounds(rectangle) { return rectangleVertices(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

export function rectangleCenterX(x, width) { return x + width / 2; }
export function rectangleCenterY(y, height) { return y + height / 2; }
export function rectangleCenter(x, y, width, height) { return { x: rectangleCenterX(x, width), y: rectangleCenterY(y, height) }; }
export function rectangleCenterXFromBounds(rectangle) { return rectangleCenterX(rectangle.x, rectangle.width); }
export function rectangleCenterYFromBounds(rectangle) { return rectangleCenterY(rectangle.y, rectangle.height); }
export function rectangleCenterFromBounds(rectangle) { return rectangleCenter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }
