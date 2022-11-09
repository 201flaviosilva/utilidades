/**
 * Check if the given value is a falsy value
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy}
 * 
 * @example
 * isFalsy(false) // true
 * isFalsy("") // true
 * isFalsy(0) // true
 * isFalsy([]) // true
 * isFalsy({}) // true
 * isFalsy(null) // true
 * isFalsy(undefined) // true
 * isFalsy(NaN) // true

 * isFalsy("beep") // false
 * isFalsy(1) // false
 * isFalsy({dog:"Lua"}) // false
 * isFalsy(["Snoopy","Ninica","Lua"]) // false
 * isFalsy(console) // false
 * 
 * @param {*} value - the value to check
 * @returns {boolean}
 */
export function isFalsy(value) {
	try {
		if (!value || (typeof value == "object" && (Object.keys(value).length == 0))) return true;
	} catch (err) { return true; }

	return false;
};

/**
 * Check if the given value is a Truthy value
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Truthy}
 * 
 * @example
 * isTruthy(false) // false
 * isTruthy("") // false
 * isTruthy(0) // false
 * isTruthy([]) // false
 * isTruthy({}) // false
 * isTruthy(null) // false
 * isTruthy(undefined) // false
 * isTruthy(NaN) // false

 * isTruthy("beep") // true
 * isTruthy(1) // true
 * isTruthy({dog:"Lua"}) // true
 * isTruthy(["Snoopy","Ninica","Lua"]) // true
 * isTruthy(console) // true
 * 
 * @param {*} value - the value to check
 * @returns {boolean}
 */
export function isTruthy(value) { return !isFalsy(value); }
