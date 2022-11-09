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
 *
 * @function printObjectInDOM
 * @memberof DOM
 */
export function printObjectInDOM(object: any, parent?: HTMLElement): void;
