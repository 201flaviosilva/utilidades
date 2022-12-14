/**
 * Generates a random string, with capital and small letters, numbers and symbols
 *
 * @example randomString(); // yUeMTTvP+kO8
 * @example randomString({numberCharacters: 6,numbers: false, symbols: true, capital: false, small: false,}); // [+"()‰
 * @example randomString({numberCharacters: 3,numbers: false, symbols: true, capital: true, small: true,}); // TGm
 *
 * @param {Object} options - options to generate a random string
 * @param {number} options.numberCharacters - number of characters that string will have
 * @param {boolean} options.capital - enable to generate character with capital letters
 * @param {boolean} options.small - enable to generate character with small letters
 * @param {boolean} options.numbers - enable to generate character with numbers
 * @param {boolean} options.symbols - enable to generate character with symbols
 * @returns {string}
 */
export function randomString(options?: {
    numberCharacters: number;
    capital: boolean;
    small: boolean;
    numbers: boolean;
    symbols: boolean;
}): string;
