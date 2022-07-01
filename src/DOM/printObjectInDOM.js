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
export function printObjectInDOM(object, parent = document.body) {
	const div = document.createElement("div");
	div.innerHTML = _eachRecursive(object, Object.keys({ object })[0]);
	parent.appendChild(div);
}

// Function to run Recursively in all proprieties of the object
function _eachRecursive(obj, parentKey = "Object") {
	let html = "";
	html += `<details><summary>${parentKey}</summary><div style="border: 1px solid black;padding: 4px;">`

	for (let key in obj) {
		const validObject = typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key]);
		const validArray = Array.isArray(obj[key]) && obj[key].length > 0;

		if (validObject) html += _eachRecursive(obj[key], key);
		else if (validArray) html += _eachRecursive(obj[key], key);
		else html += "<li>" + key + ": " + obj[key] + "</li>";
	}

	html += `</div class=""></details>`;
	return html;
}
