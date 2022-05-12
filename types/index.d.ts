/**
 * Return a random float number between the given values and the given precision
 *
 * @example
 * randomFloat(0, 1);
 * randomFloat(-10, 0, 5);
 * randomFloat(-550, 444);
 *
 * @param {number} min - min value
 * @param {number} max - max value
 * @param {number} precision - the float precision
 * @returns {number} - random number
 */
export function randomFloat(min: number, max: number, precision?: number): number;
export function randomInt(min: any, max: any): number;
export function randomColor(): string;
export function randomColor0X(): string;
export function randomRGBColor(): string;
export function randomRGBAColor(): string;
export function radiansToDegrees(r: any): number;
export function degreesToRadians(d: any): number;
export function sortAscending(arr: any): any;
export function sortDescending(arr: any): any;
export function formateScore(time: any): number;
/**
 * Re-maps a number from one range to another
 *
 * @see {@link https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56#gistcomment-2951694}
 *
 * @param {*} value
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @returns {*} - value
 */
export function map(value: any, x1: any, y1: any, x2: any, y2: any): any;
export function distanceTwoPoints(x1: any, y1: any, x2: any, y2: any): number;
export function distanceTwoPointsVector2(point1: any, point2: any): number;
export function angleBetweenTwoPoints(x1: any, y1: any, x2: any, y2: any): number;
export function angleBetweenTwoPointsVector2(point1: any, point2: any): number;
export function angleBetweenTwoPointsDegrees(x1: any, y1: any, x2: any, y2: any): number;
export function angleBetweenTwoPointsVector2Degrees(point1: any, point2: any): number;
export function distanceBetweenTwoCirclesFromCircle(circle1: any, circle2: any): number;
export function distanceBetweenTwoCircles(x1: any, y1: any, radius1: any, x2: any, y2: any, radius2: any): number;
export function circleArea(radius: any): number;
export function circlePerimeter(radius: any): number;
export function distanceBetweenTwoRectanglesFromBounds(rect1: any, rect2: any): number;
export function distanceBetweenTwoRectangles(x1: any, y1: any, width1: any, height1: any, x2: any, y2: any, width2: any, height2: any): number;
export function angleBetweenTwoRectanglesFromBounds(rect1: any, rect2: any): number;
export function angleBetweenTwoRectangles(x1: any, y1: any, width1: any, height1: any, x2: any, y2: any, width2: any, height2: any): number;
export function rectangleArea(width: any, height: any): number;
export function rectanglePerimeter(width: any, height: any): number;
export function rectanglePerimeterFromBounds(rectangle: any): number;
export function rectangleVertices(x: any, y: any, width: any, height: any): {
    x: any;
    y: any;
}[];
export function rectangleVerticesFromBounds(rectangle: any): {
    x: any;
    y: any;
}[];
export function rectangleCenterX(x: any, width: any): any;
export function rectangleCenterY(y: any, height: any): any;
export function rectangleCenter(x: any, y: any, width: any, height: any): {
    x: any;
    y: any;
};
export function rectangleCenterXFromBounds(rectangle: any): any;
export function rectangleCenterYFromBounds(rectangle: any): any;
export function rectangleCenterFromBounds(rectangle: any): {
    x: any;
    y: any;
};
/**
 * Check if all characters are equal in a string
 */
export function allCharactersSame(string: any): boolean;
export function sortAscendingObj(arr: any, prop: any): any;
export function sortDescendingObj(arr: any, prop: any): any;
export function getMinArrayObjects(arr: any, prop: any): any;
export function getMaxArrayObjects(arr: any, prop: any): any;
export function getDateFormatted(): string;
export function deleteAllChildDom(domElement: any): void;
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
export function compare2Objects(object1: any, object2: any): boolean;
export function download(data: any, filename: any, type: any): void;
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
export function getUrlParameter(key: string): string;
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
 * print(myObject, document.getElementById("myDomElement"));
 *
 * @param {*} object - JavaScript Object to print in the dom
 * @param {*?} [parent=document.body] - DOM element to print
 * @see {@link -  https://jsfiddle.net/201flaviosilva/mbnz3p7y/}
 */
export function printObjectInDOM(object: any, parent?: any | null): void;
