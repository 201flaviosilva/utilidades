/**
 * @class LIFO
 * @classdesc Last in, first out
 * @see {@link https://en.wikipedia.org/wiki/Stack_(abstract_data_type)}
 * 
 * @example
 * const lifo = new LIFO([1,2,3]);
 * console.log(lifo.add(4)); // [1,2,3,4]
 * console.log(lifo.remove()); // 4
 * console.log(lifo.state); // [1,2,3]
 * 
 * @param {any[]} initState - The initial state
 * @constructor
 */
export class LIFO {
	constructor(initState = []) {
		this.state = initState.map(s => s);
	}

	/**
	 * Adds at the end, the given value to the current state
	 * 
	 * @example f.add(4);
	 * 
	 * @param {any} value - the value to add
	 * @returns {any[]}
	 */
	add(value) {
		this.state.push(value);
		return this.state;
	}

	/**
	 * Removes the last value of the current state
	 * 
	 * @example lifo.remove(1);
	 * 
	 * @returns {any}
	 */
	remove() { return this.state.pop(); }
}
