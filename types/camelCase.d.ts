/**
 * Change a given text to a camelCase text based
 * @see {@link https://en.wikipedia.org/wiki/Camel_case}
 *
 * @example stringToCamelCase("beep"); // beep
 * @example stringToCamelCase("Beep"); // beep
 * @example stringToCamelCase("beep boop"); // beepBoop
 * @example stringToCamelCase("beep Boop"); // beepBoop
 *
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function stringToCamelCase(str: string): string;
/**
 * Change a given camelCase text to a normal text
 * @see {@link https://en.wikipedia.org/wiki/Camel_case}
 *
 * @example camelCaseToNormal("beep"); // beep
 * @example camelCaseToNormal("Beep"); // beep
 * @example camelCaseToNormal("beep boop"); // boop beep
 * @example camelCaseToNormal("Beep Boop"); // boop beep
 *
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function camelCaseToNormal(str: string): string;
