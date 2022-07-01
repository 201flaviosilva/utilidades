/**
 * Change a given text to a SCREAMING_SNAKE_CASE base text
 * 
 * @example stringToScreamingSnakeCase("beep"); // beep
 * @example stringToScreamingSnakeCase("Beep"); // BEEP_BOOP
 * @example stringToScreamingSnakeCase("beep_boop"); // BEEP_BOOP
 * @example stringToScreamingSnakeCase("Beep_Boop"); // BEEP_BOOP
 * 
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function stringToScreamingSnakeCase(str) { return str.replaceAll(" ", "_").toUpperCase(); }

/**
 * Change a given text to a SCREAMING_SNAKE_CASE base text
 * 
 * @example stringToScreamingSnakeCase("BEEP"); // beep
 * @example stringToScreamingSnakeCase("BEEP_BOOP"); // beep boop
 * 
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function screamingSnakeCaseToNormal(str) { return str.replaceAll("_", " ").toLowerCase(); }
