/**
 * Compare if there is truthy value.
 * Return true if all values are truthy.
 * 
 * @example
 * and(false, false, false); // false
 * and(true, false, false); // false
 * and(true, false, true); // false
 * and(true, true, true); // true
 * 
 * @param {any} args - values to check
 * @returns {boolean}
 */
export function and(...args) {
	for (let i = 0; i < args.length; i++) {
		if (!args[i]) return false;
	}
	return true;
};

/**
 * Compare if one of the value are truthy.
 * Return true if one are truthy.
 * 
 * @example
 * or(false, false, false); // false
 * or(true, false, true); // true
 * or(false, true, false); // true
 * or(true, true, true); // true
 * 
 * @param {any} args - values to check
 * @returns {boolean}
 */
export function or(...args) { return !!args.find(a => !!a) };

/**
 * Return false if both values are truthy ou falsy.
 * 
 * @example
 * xor(false, false); // false
 * xor(true, false); // true
 * xor(false, true); // true
 * xor(true, true); // false
 * 
 * @param {any} value1 - value 1 to compare
 * @param {any} value2 - value 2 to compare
 * @returns {boolean}
 */
export function xor(value1, value2) { return !!value1 !== !!value2 };
