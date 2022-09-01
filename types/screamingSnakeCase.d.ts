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
export function stringToScreamingSnakeCase(str: string): string;
/**
 * Change a given text to a SCREAMING_SNAKE_CASE base text
 *
 * @example stringToScreamingSnakeCase("BEEP"); // beep
 * @example stringToScreamingSnakeCase("BEEP_BOOP"); // beep boop
 *
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function screamingSnakeCaseToNormal(str: string): string;
/**
 * Change a given text to a SCREAMING_SNAKE_CASE base text.
 *
 * Use {@link screamingSnakeCaseToNormal} function
 *
 * @see {@link screamingSnakeCaseToNormal}
 *
 *
 * @deprecated
 */
export function screamingSnakeCaseToNormalDeprecated(str: any): any;
