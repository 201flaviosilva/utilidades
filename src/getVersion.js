import { version } from "../package.json"

/**
 * @description 
 * Returns the current version of the library
 * 
 * @example
 * getVersion(); // "1.2.4
 * 
 * @returns {String}
 */
export function getVersion() { return version; }
