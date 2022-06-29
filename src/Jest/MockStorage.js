/**
 * This simulate the localStorage and sessionStorage in the jest environment
 * 
 * @example import "./MockStorage.js"; // only need to do this
 * 
 * @see {@link https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests}
 */
class StorageMock {
	constructor() { this.store = {}; }
	/**
	 * Removes all key/value pairs, if there are any.
	 *
	 * Dispatches a storage event on Window objects holding an equivalent Storage object.
	 */
	clear() { this.store = {}; }

	/** Returns the current value associated with the given key, or null if the given key does not exist. */
	getItem(key) { return this.store[key] || null; }

	/**
	 * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
	 *
	 * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
	 *
	 * Dispatches a storage event on Window objects holding an equivalent Storage object.
	 */
	setItem(key, value) { this.store[key] = String(value); }

	/**
	 * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
	 *
	 * Dispatches a storage event on Window objects holding an equivalent Storage object.
	 */
	removeItem(key) { delete this.store[key]; }
}
global.localStorage = new StorageMock;
global.sessionStorage = new StorageMock;
