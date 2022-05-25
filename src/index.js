// Colors
export default function exportFile() { return "#" + (Math.random() * 0xFFFFFF << 0).toString(16); }
export default function randomColor0X() { return `0x${Math.floor(Math.random() * 16777215).toString(16)}`; }
export default function randomRGBColor() { return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`; }
export default function randomRGBAColor() { return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${Math.random().toFixed(5)})`; }

// Radians and Degrees
export default function radiansToDegrees(r) { return r * (180 / Math.PI); }
export default function degreesToRadians(d) { return d * (Math.PI / 180); }

// Points
export default function distanceTwoPoints(x1, y1, x2, y2) { return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)); }
export default function distanceTwoPointsVector2(point1, point2) { return distanceTwoPoints(point1.x, point1.y, point2.x, point2.y); }

export default function angleBetweenTwoPoints(x1, y1, x2, y2) { return Math.atan2(y2 - y1, x2 - x1); }
export default function angleBetweenTwoPointsVector2(point1, point2) { return angleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y); }
export default function angleBetweenTwoPointsDegrees(x1, y1, x2, y2) { return angleBetweenTwoPointsRadians(x1, y1, x2, y2) * 180 / Math.PI; }
export default function angleBetweenTwoPointsVector2Degrees(point1, point2) { return angleBetweenTwoPointsDegrees(point1.x, point1.y, point2.x, point2.y); }

// Circles
export default function distanceBetweenTwoCirclesFromCircle(circle1, circle2) {
	return distanceTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) - (circle1.radius + circle2.radius);
}
export default function distanceBetweenTwoCircles(x1, y1, radius1, x2, y2, radius2) {
	return distanceBetweenTwoCirclesFromCircle(
		{ x: x1, y: y1, radius: radius1 },
		{ x: x2, y: y2, radius: radius2 }
	);
}

export default function circleArea(radius) { return Math.PI * radius * radius; }
export default function circlePerimeter(radius) { return 2 * Math.PI * radius; }

// Rectangles
export default function distanceBetweenTwoRectanglesFromBounds(rect1, rect2) {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return xOverlap * yOverlap;
}
export default function distanceBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
	return distanceBetweenTwoRectanglesFromBounds(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}

export default function angleBetweenTwoRectanglesFromBounds(rect1, rect2) {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return Math.atan2(yOverlap, xOverlap);
}
export default function angleBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
	return angleBetweenTwoRectanglesFromBounds(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}

export default function rectangleArea(width, height) { return width * height; }
export default function rectanglePerimeter(width, height) { return 2 * (width + height); }
export default function rectanglePerimeterFromBounds(rectangle) { return rectanglePerimeter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

export default function rectangleVertices(x, y, width, height) {
	return [
		{ x: x, y: y },
		{ x: x + width, y: y },
		{ x: x + width, y: y + height },
		{ x: x, y: y + height }
	];
}
export default function rectangleVerticesFromBounds(rectangle) { return rectangleVertices(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

export default function rectangleCenterX(x, width) { return x + width / 2; }
export default function rectangleCenterY(y, height) { return y + height / 2; }
export default function rectangleCenter(x, y, width, height) { return { x: rectangleCenterX(x, width), y: rectangleCenterY(y, height) }; }
export default function rectangleCenterXFromBounds(rectangle) { return rectangleCenterX(rectangle.x, rectangle.width); }
export default function rectangleCenterYFromBounds(rectangle) { return rectangleCenterY(rectangle.y, rectangle.height); }
export default function rectangleCenterFromBounds(rectangle) { return rectangleCenter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

// String
/**
 * Check if all characters are equal in a string
 */
export default function allCharactersSame(string) {
	for (let i = 1; i < string.length; i++) {
		if (string[0] != string[i]) return false;
	}
	return true;
}

// Get Max/Min from a Array of Objects
export default function getMinArrayObjects(arr, prop) { return Math.min.apply(Math, arr.map(o => o[prop])); }
export default function getMaxArrayObjects(arr, prop) { return Math.max.apply(Math, arr.map(o => o[prop])); }

// Date
export default function getDateFormatted() {
	const date = new Date();
	return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

// Eliminate all child elements of a choice parent element, for example: ul
export default function deleteAllChildDom(domElement) {
	while (domElement.hasChildNodes()) domElement.removeChild(domElement.firstChild);
	domElement.innerHTML = "";
}
