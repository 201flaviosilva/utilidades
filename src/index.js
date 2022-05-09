// JS Utils

// Numbers
export const randomFloat = (min, max, precision = 2) => {
	if (!max) {
		max = min;
		min = 0;
	}
	return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}
export const randomInt = (min, max) => { return Math.floor(randomFloat(min, max)); };

// Colors
export const randomColor = () => "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
export const randomColor0X = () => `0x${Math.floor(Math.random() * 16777215).toString(16)}`;
export const randomRGBColor = () => `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
export const randomRGBAColor = () => `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${Math.random().toFixed(5)})`;

// Radians and Degrees
export const radiansToDegrees = r => r * (180 / Math.PI);
export const degreesToRadians = d => d * (Math.PI / 180);

// Numbers
export const sortAscending = arr => arr.sort((a, b) => a - b);
export const sortDescending = arr => arr.sort((a, b) => b - a);
export const formateScore = time => Number((time * 0.001).toFixed(0)); // Formate Score by time

/**
 * @description
 * Re-maps a number from one range to another
 * 
 * @see {@link https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56#gistcomment-2951694}
 */
export const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

// Points
export const distanceTwoPoints = (x1, y1, x2, y2) => { return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)); }
export const distanceTwoPointsVector2 = (point1, point2) => { return distanceTwoPoints(point1.x, point1.y, point2.x, point2.y); }

export const angleBetweenTwoPoints = (x1, y1, x2, y2) => { return Math.atan2(y2 - y1, x2 - x1); }
export const angleBetweenTwoPointsVector2 = (point1, point2) => { return angleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y); }
export const angleBetweenTwoPointsDegrees = (x1, y1, x2, y2) => { return angleBetweenTwoPointsRadians(x1, y1, x2, y2) * 180 / Math.PI; }
export const angleBetweenTwoPointsVector2Degrees = (point1, point2) => { return angleBetweenTwoPointsDegrees(point1.x, point1.y, point2.x, point2.y); }

// Circles
export const distanceBetweenTwoCirclesFromCircle = (circle1, circle2) => {
	return distanceTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) - (circle1.radius + circle2.radius);
}
export const distanceBetweenTwoCircles = (x1, y1, radius1, x2, y2, radius2) => {
	return distanceBetweenTwoCirclesFromCircle(
		{ x: x1, y: y1, radius: radius1 },
		{ x: x2, y: y2, radius: radius2 }
	);
}

export const circleArea = (radius) => { return Math.PI * radius * radius; }
export const circlePerimeter = (radius) => { return 2 * Math.PI * radius; }

// Rectangles
export const distanceBetweenTwoRectanglesFromBounds = (rect1, rect2) => {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return xOverlap * yOverlap;
}
export const distanceBetweenTwoRectangles = (x1, y1, width1, height1, x2, y2, width2, height2) => {
	return distanceBetweenTwoRectanglesFromBounds(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}

export const angleBetweenTwoRectanglesFromBounds = (rect1, rect2) => {
	const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
	const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
	return Math.atan2(yOverlap, xOverlap);
}
export const angleBetweenTwoRectangles = (x1, y1, width1, height1, x2, y2, width2, height2) => {
	return angleBetweenTwoRectanglesFromBounds(
		{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
		{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
	);
}

export const rectangleArea = (width, height) => { return width * height; }
export const rectanglePerimeter = (width, height) => { return 2 * (width + height); }
export const rectanglePerimeterFromBounds = (rectangle) => { return rectanglePerimeter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

export const rectangleVertices = (x, y, width, height) => {
	return [
		{ x: x, y: y },
		{ x: x + width, y: y },
		{ x: x + width, y: y + height },
		{ x: x, y: y + height }
	];
}
export const rectangleVerticesFromBounds = (rectangle) => { return rectangleVertices(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

export const rectangleCenterX = (x, width) => { return x + width / 2; }
export const rectangleCenterY = (y, height) => { return y + height / 2; }
export const rectangleCenter = (x, y, width, height) => { return { x: rectangleCenterX(x, width), y: rectangleCenterY(y, height) }; }
export const rectangleCenterXFromBounds = (rectangle) => { return rectangleCenterX(rectangle.x, rectangle.width); }
export const rectangleCenterYFromBounds = (rectangle) => { return rectangleCenterY(rectangle.y, rectangle.height); }
export const rectangleCenterFromBounds = (rectangle) => { return rectangleCenter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

// String
/**
 * Check if all characters are equal in a string
 */
export const allCharactersSame = string => {
	for (let i = 1; i < string.length; i++) {
		if (string[0] != string[i]) return false;
	}
	return true;
}

// Sort Objects by property
export const sortAscendingObj = (arr, prop) => arr.sort((a, b) => a[prop] - b[prop]);
export const sortDescendingObj = (arr, prop) => arr.sort((a, b) => b[prop] - a[prop]);

// Get Max/Min from a Array of Objects
export const getMinArrayObjects = (arr, prop) => Math.min.apply(Math, arr.map(o => o[prop]));
export const getMaxArrayObjects = (arr, prop) => Math.max.apply(Math, arr.map(o => o[prop]));

// Date
export const getDateFormatted = () => {
	const date = new Date();
	return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

// Eliminate all child elements of a choice parent element, for example: ul
export const deleteAllChildDom = (domElement) => {
	while (domElement.hasChildNodes()) {
		domElement.removeChild(domElement.firstChild);
	}
}

// Export a file
export const download = (data, filename, type) => {
	const file = new Blob([data], { type: type });
	if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);
	else {
		const a = document.createElement("a"),
			url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(() => {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 0);
	}
}
