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
 * 
 * @function stringToScreamingSnakeCase
 * @memberof Deprecated
 * @deprecated
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
 * 
 * @function screamingSnakeCaseToNormal
 * @memberof Deprecated
 * @deprecated
 */
export function screamingSnakeCaseToNormal(str) { return str.replaceAll("_", " ").toLowerCase(); }


/**
 * Change a given text to a SCREAMING_SNAKE_CASE base text.
 * 
 * Use {@link screamingSnakeCaseToNormal} function
 * 
 * @see {@link screamingSnakeCaseToNormal}
 * 
 * 
 * @function screamingSnakeCaseToNormalDeprecated
 * @memberof Deprecated
 * @deprecated
 */
export function screamingSnakeCaseToNormalDeprecated(str) { return str.split("_").map(s => s.toLocaleLowerCase()).join(" "); }
