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
export default function getUrlParameter(key) {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	return params[key];
}
