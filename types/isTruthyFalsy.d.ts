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
export function isFalsy(value: any): boolean;
/**
 * Check if the given value is a Truthy value
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Truthy}
 *
 * @example
 * isFalsy(false) // false
 * isFalsy("") // false
 * isFalsy(0) // false
 * isFalsy([]) // false
 * isFalsy({}) // false
 * isFalsy(null) // false
 * isFalsy(undefined) // false
 * isFalsy(NaN) // false

 * isFalsy("beep") // true
 * isFalsy(1) // true
 * isFalsy({dog:"Lua"}) // true
 * isFalsy(["Snoopy","Ninica","Lua"]) // true
 * isFalsy(console) // true
 *
 * @param {*} value - the value to check
 * @returns {boolean}
 */
export function isTruthy(value: any): boolean;
