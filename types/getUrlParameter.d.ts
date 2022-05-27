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
