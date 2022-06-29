/**
 * Change a given text to a Capitalize base text.
 * @see {@link https://en.wikipedia.org/wiki/Capitalization}
 *
 * @example stringToCapitalize("beep"); // Beep
 * @example stringToCapitalize("Beep"); // Beep
 * @example stringToCapitalize("beep boop"); // Beep boop
 * @example stringToCapitalize("beep Boop"); // Beep Boop
 *
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function stringToCapitalize(str: string): string;
/**
 * Change a given capitalized text to a normal text
 *
 * @example capitalizeToNormal("beep"); // beep
 * @example capitalizeToNormal("Beep"); // beep
 * @example capitalizeToNormal("beep boop"); // beep boop
 * @example capitalizeToNormal("beep Boop"); // beep Boop
 *
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function capitalizeToNormal(str: string): string;
