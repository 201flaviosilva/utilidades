/**
 * Get a value from a query parameter from the current URL
 *
 * @example
 * URL: http://localhost:8080/?name=Silva
 * getUrlParameter("name"); // Silva
 *
 * @param {string} key - The key of the query parameter
 * @returns {string} Returns the value of the key
 *
 * @function getUrlParameter
 * @memberof DOM
 */
export function getUrlParameter(key: string): string;
