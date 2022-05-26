/**
 * Check if all characters are equal in a string or a array
 * Returns true if all characters are equal. 
 * And false if not.
 * 
 * @example
 * allCharactersSame("beep") // false
 * allCharactersSame("aaaaaaaaaaaa") // true
 * allCharactersSame("b") // true
 * allCharactersSame("") // true
 * 
 * allCharactersSame(["a", "a"]) // true
 * allCharactersSame(["beep", "beep"]) // true
 * allCharactersSame(["a", "b"]) // false
 * 
 * allCharactersSame([1, 1]); // true
 * allCharactersSame([1, 2]); // false
 * 
 * @param {string|Array} string - string to check
 * @returns {boolean}
 */
export default function allCharactersSame(string) {
	for (let i = 1; i < string.length; i++) {
		if (string[0] != string[i]) return false;
	}
	return true;
}
