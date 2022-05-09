// JS Utils

// Numbers
export function randomNumber(min, max) {
	if (!max) {
		max = min;
		min = 0;
	}
	return Math.floor(Math.random() * (max - min + 1) + min);
};
export function randomNumberDecimal(min, max, places) {
	const value = (Math.random() * (max - min + 1)) + min;
	return Number.parseFloat(value).toFixed(places);
}

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

// Re-maps a number from one range to another -> https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56#gistcomment-2951694
export const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

// String
// Check if all characters are equal in a string
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
