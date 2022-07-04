/**
 * @class FIFO
 * @classdesc First in, first out
 * @see {@link https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)}
 *
 * @example
 * const fifo = new FIFO([1,2,3]);
 * console.log(fifo.add(4)); // [1,2,3,4]
 * console.log(fifo.remove()); // 1
 * console.log(fifo.state); // [2,3,4]
 *
 * @param {any[]} initState - The initial state
 * @constructor
 */
export class FIFO {
    constructor(initState?: any[]);
    state: any[];
    /**
     * Adds a value to the current state
     *
     * @example fifo.add(4);
     *
     * @param {any} value - the value to add
     * @returns {any[]}
     */
    add(value: any): any[];
    /**
     * Removes the first value of the current state
     *
     * @example fifo.remove(); // 4
     *
     * @returns {any}
     */
    remove(): any;
}
