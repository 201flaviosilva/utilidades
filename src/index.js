/**
 * Return a random float number between the given values and the given precision
 * 
 * @example
 * randomFloat(0, 1);
 * randomFloat(-10, 0, 5);
 * randomFloat(-550, 444);
 * 
 * @param {number} [min=0] - min value
 * @param {number} [max=1] - max value
 * @param {number} [precision=2] - the float precision
 * @returns {number} - random float number
 */
export function randomFloat(min = 0, max = 1, precision = 2) {
	if (!max) {
		max = min;
		min = 0;
	}
	return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

/**
 * Return a random integer number between the given values and the given precision
 * 
 * @example
 * randomInt(0, 1);
 * randomInt(-10, 0);
 * randomInt(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} - random integer number
 */
export function randomInt(min, max) { return Math.floor(randomFloat(min, max)); };

/**
 * Return a random number between the given values and the given precision
 * 
 * @example
 * randomNumber(0, 1);
 * randomNumber(-10, 0, 5);
 * randomNumber(-550, 444);
 * 
 * @param {number} min - min value
 * @param {number} max - max value
 * @returns {number} - random number
 */
export function randomNumber(min, max) { return randomFloat(min, max) };

/**
 * Check is the given number is a EVEN number
 * 
 * @example
 * isEven(1); // false
 * isEven(2); // true
 * 
 * @param {number} number - The number to check
 * @returns {boolean}
 */
export function isEven(number) { return number % 2 == 0 }

/**
 * Check is the given number is a ODD number
 * 
 * @example
 * isOdd(1); // true
 * isOdd(2); // false
 * 
 * @param {number} number - The number to check
 * @returns {boolean}
 */
export function isOdd(number) { return number % 2 == 1 }

/**
 * Check is a number is multiple of other
 * 
 * @example
 * isMultipleOf(1, 2); // false
 * isMultipleOf(1, 1); // true
 * isMultipleOf(10, 2); // true
 * isMultipleOf(0, 2); // true
 * isMultipleOf(0, 0); // false
 * isMultipleOf(7, 21); // false
 * isMultipleOf(100, 21); // false
 * isMultipleOf(15, 5); // true
 * isMultipleOf(14, 5); // false
 * 
 * @param {number} dividend - the number check is multiple
 * @param {number} divisor - divisor number
 * @returns {boolean}
 */
export function isMultipleOf(dividend, divisor) { return dividend % divisor == 0 }

/**
 * Return a negative number based in the given number
 * 
 * @example
 * makeNegative(10) // -10
 * makeNegative(0) // 0
 * makeNegative(-5) // -5
 * 
 * @param {number} number - The number you want to convert
 * @returns {number} - a negative number
 */
export function makeNegative(number) { return Math.abs(number) * -1; };

/**
 * Convert a number to a binary
 * 
 * @example
 * decimal2binary(42); // "101010"
 * 
 * @param {number} decimal - the number to be converted
 * @returns {string} - conversion binary string
 */
export function decimal2Binary(decimal) { return Number(decimal).toString(2); }

/**
 * Convert a number/string to a decimal
 * 
 * @example
 * binary2Decimal(101010); // 42
 * 
 * @param {number|string} binary - the number/string to be converted
 * @returns {number} - conversion decimal
 */
export function binary2Decimal(binary) {
	if (typeof binary === "string") return parseInt(binary.split("").reverse().join(""), 2);
	else if (typeof binary === "number") return parseInt(binary, 2);
}

/**
 * Sort an array of number by ascending
 * 
 * @example
 * const myArr = [10,4,2,7,1,0,11,4,2,3,5,8,4,3,0,6];
 * const myNewSortedArr = sortAscending(myArr); // [0,0,1,2,2,3,3,4,4,4,5,6,7,8,10,11]
 * 
 * @param {number[]} arr - the array to sort
 * @returns {number[]} A new Array sorted
 */
export function sortAscending(arr) { return [...arr].sort((a, b) => a - b); }

/**
 * Sort an array of number by descending
 * 
 * @example
 * const myArr = [10,4,2,7,1,0,11,4,2,3,5,8,4,3,0,6];
 * const myNewSortedArr = sortDescending(myArr); // [11,10,8,7,6,5,4,4,4,3,3,2,2,1,0,0]
 * 
 * @param {number[]} arr - the array to sort
 * @returns {number[]} A new Array sorted
 */
export function sortDescending(arr) { return [...arr].sort((a, b) => b - a); }

// https://www.trysmudford.com/blog/linear-interpolation-functions/
/**
 * Return the value between 2 value based in a given percentage (decimal midpoint)
 * 
 * @example
 * lerp(0, 0, 100); // 0
 * lerp(0.5, 0, 100); // 50
 * lerp(1, 0, 100); // 100

 * @param {number} value - The value (decimal point)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} The result of the function
 * @see {@link https://en.wikipedia.org/wiki/Linear_interpolation}
 */
export function lerp(value, min, max) { return min + (max - min) * value; }

/**
 * If the value is greater than the maximum, returns the maximum.
 * If the value is less than the minimum, returns the minimum.
 * If not, return the passed value.
 * 
 * @example
 * clamp(-10, 0, 100); // 0
 * clamp(0, 0, 100); // 0
 * clamp(50, 0, 100); // 50
 * clamp(100, 0, 100); // 100
 * clamp(200, 0, 100); // 100
 * 
 * @param {number} value - The value to check
 * @param {number} [min=0] - Minimum value
 * @param {number} [max=1] - Maximum value
 * @returns {number} The fixed value
 */
export function clamp(value, min = 0, max = 1) { return Math.min(max, Math.max(min, value)); }

/**
 * Determines where a value lies between two points.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.InverseLerp.html}
 * 
 * @example
 * invertedLerp(-10, 0, 10); // 0
 * invertedLerp(0, 0, 10); // 0
 * invertedLerp(5, 0, 10); // 0.5
 * invertedLerp(10, 0, 10); // 1
 * invertedLerp(100, 0, 10); // 1
 * 
 * @param {number} value - The point within the range you want to calculate.
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @returns {number} value between 0 and 1, representing where the "value" parameter falls within the range defined by start and end
 */
export function invertedLerp(value, start, end) { return clamp((value - start) / (end - start)); }

/**
 * Re-maps a number from one range to another
 * @see {@link https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56#gistcomment-2951694}
 * 
 * @example
 * //     value, range1, range2
 * // map(value, x1, y1, x2, y2)
 * map(-10, 0, 100, 0, 1000); // -100
 * map(0, 0, 100, 0, 1000); // 0
 * map(10, 0, 100, 0, 1000); // 100
 * map(50, 0, 100, 0, 1000); // 500
 * map(1000, 0, 100, 0, 1000) // 10000
 * 
 * @param {number} value 
 * @param {number} start1 - Start of the range 1
 * @param {number} end1 - End of the range 1
 * @param {number} start2 - Start of the range 2
 * @param {number} end2 - End of the range 2
 * @returns {number} the value un the range
 */
export function map(value, start1, end1, start2, end2) { return (value - start1) * (end2 - start2) / (end1 - start1) + start2; }

/**
 * Return a array of number Between the 2 given values,
 * 
 * @example
 * range(1, 5); // [ 1, 2, 3, 4, 5 ]
 * range(0, 100, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
 * range(0, 100, 100) // [0, 100]
 * range(1, 100, 100) // [1]
 * 
 * @param {number} start - start point to add numbers
 * @param {number} end - end point to stop adding numbers
 * @param {number} [step=1] - The value to increment
 * @returns {number} Array of number
 */
export function range(start, end, step = 1) {
	const arr = [];
	for (let i = start; i < end + 1; i += step) arr.push(i);
	return arr;
}

/**
 * Find lowest element from array of objects
 * 
 * @example
 * const myArray = [{a: 1, b:100}, {a: 10, b:50}, {a: 0, b:200}]
 * findLowArrObj(myArray, "b"); // {a: 10, b:50}
 * findLowArrObj(myArray, "a"); // {a: 0, b: 200}
 * 
 * @param {Array} array - The array to search
 * @param {string} prop - The property to find the lowest element
 * @returns {Objects} - The lowest element in the array
 */
export function findLowArrObj(array, prop) {
	const propValues = array.map((e) => e[prop]); // Get a new array only the props
	const minPropValue = Math.min(...propValues); // Try to find the lowest value
	return array.find((e) => e[prop] === minPropValue); // Find the lowest in the array
}

/**
 * Find biggest element from array of objects
 * 
 * @example
 * const myArray = [{a: 1, b:100}, {a: 10, b:50}, {a: 0, b:200}]
 * findBigArrObj(myArray, "b"); // {a: 0, b:200}
 * findBigArrObj(myArray, "a"); // {a: 10, b: 50}
 * 
 * @param {Array} array - The array to search
 * @param {string} prop - The property to find the biggest element
 * @returns {Objects} - The biggest element in the array
 */
export function findBigArrObj(array, prop) {
	const propValues = array.map((e) => e[prop]); // Get a new array only the props
	const minPropValue = Math.max(...propValues); // Try to find the biggest value
	return array.find((e) => e[prop] === minPropValue); // Find the biggest in the array
}

// Colors
export function randomColor() { return "#" + (Math.random() * 0xFFFFFF << 0).toString(16); }
export function randomColor0X() { return `0x${Math.floor(Math.random() * 16777215).toString(16)}`; }
export function randomRGBColor() { return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`; }
export function randomRGBAColor() { return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${Math.random().toFixed(5)})`; }

// Radians and Degrees
export function radiansToDegrees(r) { return r * (180 / Math.PI); }
export function degreesToRadians(d) { return d * (Math.PI / 180); }

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

// String
/**
 * Check if all characters are equal in a string
 */
export function allCharactersSame(string) {
	for (let i = 1; i < string.length; i++) {
		if (string[0] != string[i]) return false;
	}
	return true;
}

/**
 * Sort a array of objects in ascending order by property
 * 
 * @param {Array} arr - the array to sort
 * @param {string} prop - the property base to sort
 * @returns {Array} - a new sorted array by the given property
 */
export function sortAscendingObj(arr, prop) { return arr.sort((a, b) => a[prop] - b[prop]); }

/**
 * Sort a array of objects in descending order by property
 * 
 * @param {*} arr - the array to sort
 * @param {*} prop - the property base to sort
 * @returns {Array} - a new sorted array by the given property
 */
export function sortDescendingObj(arr, prop) { return arr.sort((a, b) => b[prop] - a[prop]); }

// Get Max/Min from a Array of Objects
export function getMinArrayObjects(arr, prop) { return Math.min.apply(Math, arr.map(o => o[prop])); }
export function getMaxArrayObjects(arr, prop) { return Math.max.apply(Math, arr.map(o => o[prop])); }

// Date
export function getDateFormatted() {
	const date = new Date();
	return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

// Eliminate all child elements of a choice parent element, for example: ul
export function deleteAllChildDom(domElement) {
	while (domElement.hasChildNodes()) {
		domElement.removeChild(domElement.firstChild);
	}
	domElement.innerHTML = "";
}

/**
 * Compare if two object are equal
 * 
 * @example
 * compare2Objects({a:1, b:2}, {a: 1}); // false
 * compare2Objects({a:1, b:2}, {a: 1, b: 2 }); // true
 * 
 * @param {*} object1 - the first object/array to compare
 * @param {*} object2 - the second object/array to compare
 * @returns {boolean} - true if the two object are equal
 */
export function compare2Objects(object1, object2) { return JSON.stringify(object1) === JSON.stringify(object2); }

// Export a file
export function download(data, filename, type) {
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

/**
 * Get a value from a query parameter from the current URL
 * 
 * @example
 * URL: http://localhost:8080/?name=Silva
 * getUrlParameter("name"); // Silva
 * 
 * @param {string} key 
 * @returns {string} - Returns the value of the key
 */
export function getUrlParameter(key) {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	return params[key];
}


/**
 * Print JavaScript Object In HTML Dom
 * 
 * @example
 * const myObject = {
 * 	name: "Sistema Solar",
 * 	numberStarts: 1,
 * 	terra: {
 * 		speed: 29.783,
 * 		moons: ["Lua"],
 * 		temperature: {
 * 			min: 93.2,
 * 			max: 57.8,
 * 			average: 14,
 * 		}
 * 	},
 * };
 * printObjectInDOM(myObject, document.getElementById("myDomElement"));
 * 
 * @param {Object} object - JavaScript Object to print in the dom
 * @param {HTMLElement} [parent=document.body] - DOM element to print
 * @see {@link -  https://jsfiddle.net/201flaviosilva/mbnz3p7y/}
 */
export function printObjectInDOM(object, parent = document.body) {
	// Function to run Recursively in all proprieties of the object
	function eachRecursive(obj, parentKey = "Object") {
		let html = "";
		html += `<details><summary>${parentKey}</summary><div style="border: 1px solid black;padding: 4px;">`

		for (let key in obj) {
			const validObject = typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key]);
			const validArray = Array.isArray(obj[key]) && obj[key].length > 0;

			if (validObject) html += eachRecursive(obj[key], key);
			else if (validArray) html += eachRecursive(obj[key], key);
			else html += "<li>" + key + ": " + obj[key] + "</li>";
		}

		html += `</div class=""></details>`;
		return html;
	}

	const div = document.createElement("div");
	div.innerHTML = eachRecursive(object, Object.keys({ object })[0]);
	parent.appendChild(div);
}
