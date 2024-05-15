// import pck from "../package.json" assert { type: "json" };
import pck from "../package.json";

/**
 * @description 
 * Returns the current version of the library
 * 
 * @example
 * getVersion(); // "1.3.3"
 * 
 * @returns {String}
 */
export function getVersion() { return pck.version; }
