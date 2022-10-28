/**
 * Change a given text to a kebab-case base text.
 * 
 * @example stringToSnakeCase("beep"); // beep
 * @example stringToSnakeCase("Beep"); // beep
 * @example stringToSnakeCase("beep boop"); // beep-boop
 * @example stringToSnakeCase("Beep Boop"); // Beep-Boop
 * 
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function stringToKebabCase(str) { return str.replaceAll(" ", "-"); }

/**
 * Change a given kebab-case text to a normal text
 * 
 * @example kebabCaseToNormal("beep"); // beep
 * @example kebabCaseToNormal("Beep"); // beep
 * @example kebabCaseToNormal("beep-boop"); // beep boop
 * @example kebabCaseToNormal("Beep-Boop"); // Beep Boop
 * 
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function kebabCaseToNormal(str) { return str.replaceAll("-", " "); }
