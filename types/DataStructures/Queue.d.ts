/**
 * @class
 * @name QueueNode
 * @classdesc Represents a node to be used in a Queue class
 *
 * @param {*} [value] - The value to be stored in the node
 *
 * @property {*} value - The value stored in the node
 * @property {QueueNode} next - The next node in the queue
 */
export class Node {
    constructor(value: any);
    value: any;
    next: any;
}
/**
 * @class
 * @name Queue
 * @classdesc
 * Represents a Queue data structure
 *
 * @see https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 *
 * @example
 * new Queue();
 * new Queue("Beep");
 * new Queue([10,20,30]);
 *
 * @param {Array|*} value - The value to initialize the queue with (optional).
 *
 * @property {QueueNode} first - The first node in the queue
 * @property {QueueNode} last - The last node in the queue
 * @property {Number} size - The number of nodes in the queue
 */
export class Queue {
    constructor(value: any);
    first: any;
    last: Node;
    size: number;
    /**
     * Adds a new value to the end of the queue
     *
     * @example
     * const q = new Queue([10,20]);
     * q.enqueue(30); // [10,20,30]
     *
     * @param {Number} value - The value to add.
     * @returns {Queue} The current Queue instance.
     */
    enqueue(value: number): Queue;
    /**
     * Removes and returns the first value in the queue
     *
     * @example
     * const q = new Queue([10,20,30]);
     * q.dequeue(); // [20,30]
     *
     * @returns {Queue} The current Queue instance.
     */
    dequeue(returnNode?: boolean): Queue;
    /**
     * Returns the first value in the queue
     *
     * @example
     * const q = new Queue([10,20,30]);
     * q.peek(); // 10
     *
     * @param {Boolean} returnNode - Whether to return the node or just the value.
     * @returns {*|QueueNode} The value in the first node.
     */
    peek(returnNode?: boolean): any | QueueNode;
    /**
     * Clears the queue
     *
     * @example
     * const q = new Queue([10,20,30]);
     * q.clear(); // []
     *
     */
    clear(): this;
    /**
     * Prints the values of the queue
     *
     * @example
     * const q = new Queue([10,20,30]);
     * q.print(); // 10,20,30
     *
     * @returns {Queue} The current Queue instance.
     */
    print(): Queue;
    /**
     * Checks if the queue is empty
     *
     * @example
     * const q = new Queue([10,20,30]);
     * q.isEmpty(); // false
     *
     * @returns {Boolean} Whether or not the queue is empty.
     */
    isEmpty(): boolean;
    /**
     * Returns a new array of the values in the queue
     *
     * @example
     * const q = new Queue([10,20,30]);
     * q.toArray(); // [10,20,30]
     *
     * @returns {Array} An array of the values in the queue.
     */
    toArray(): any[];
}
