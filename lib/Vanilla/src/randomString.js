import { choice } from "./Array/index.js";

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
export function randomString(options = {
	numberCharacters: 12,
	numbers: true, symbols: true,
	capital: true, small: true,
}) {
	const capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "y", "Z",];
	const small = ["a", "b", "c", "d", "e", "f", "G", "H", "I", "J", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
	const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
	const symbols = ["!", "\"", "@", "#", "€", "$", "£", "%", "‰", "&", "¶", "/", "(", "[", ")", "]", "=", "≠", "'", "?", "+", "*",];

	let stringOptions = [];
	stringOptions = options.capital ? [...stringOptions, ...capital] : [...stringOptions];
	stringOptions = options.small ? [...stringOptions, ...small] : [...stringOptions];
	stringOptions = options.numbers ? [...stringOptions, ...numbers] : [...stringOptions];
	stringOptions = options.symbols ? [...stringOptions, ...symbols] : [...stringOptions];

	let generatedString = "";

	for (let i = 0; i < options.numberCharacters; i++) {
		generatedString += choice(stringOptions);
	}

	return generatedString;
}
