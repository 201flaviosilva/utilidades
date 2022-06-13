/**
 * Change a given text to a snake_case base text.
 * @see {@link https://en.wikipedia.org/wiki/Snake_case}
 * 
 * @example stringToSnakeCase("beep"); // beep
 * @example stringToSnakeCase("Beep"); // Beep
 * @example stringToSnakeCase("beep boop"); // beep_boop
 * @example stringToSnakeCase("Beep Boop"); // Beep_Boop
 * 
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function stringToSnakeCase(str) { return str.replace(/\s/g, "_").replace(/([A-Z])/g, ($1) => "_" + $1.toLowerCase()); }

/**
 * Change a given snake_case text to a normal text
 * @see {@link https://en.wikipedia.org/wiki/Snake_case}
 * 
 * @example snakeCaseToNormal("beep"); // beep
 * @example snakeCaseToNormal("Beep"); // beep
 * @example snakeCaseToNormal("beep_boop"); // beep boop
 * @example snakeCaseToNormal("Beep_Boop"); // Beep Boop
 * 
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function snakeCaseToNormal(str) { return str.replace(/_/g, " ").replace(/([A-Z])/g, ($1) => " " + $1.toLowerCase()); }
