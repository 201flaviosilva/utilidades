/**
 * Invert word of a given text
 *
 * @example invertSentence("beep"); // beep
 * @example invertSentence("Beep"); // beep
 * @example invertSentence("Beep Boop"); // Boop Beep
 * @example invertSentence("beep boop 1 20"); // 20 1 boop beep
 *
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function invertSentence(str: string): string;
/**
 * Invert all letters from a given text
 *
 * @example invertWords("beep"); // peeb
 * @example invertWords("Beep"); // peeB
 * @example invertWords("Beep Boop"); // pooB peeB
 * @example invertWords("beep boop 1 20"); // 02 1 poob peeb
 *
 * @param {string} str - the text to transform
 * @returns {string}
 */
export function invertWords(str: string): string;
