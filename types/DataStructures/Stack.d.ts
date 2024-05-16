/**
 * @name StackNode
 * @class
 * @classdesc
 * Represents a node to be used in a Stack class
 *
 * @param {*} [value] - The value to be stored in the node
 *
 * @property {StackNode} next - The next node in the stack
 * @property {*} value - The value stored in the node
 */
export class Node {
    constructor(value: any);
    value: any;
    next: any;
}
/**
 * @class
 * @name Stack
 * @classdesc
 * Represents a Stack data structure
 *
 * @see https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
 *
 * @example
 * new Stack();
 * new Stack("Beep");
 * new Stack([10,20,30]);
 *
 * @param {Array|*} value - The value to initialize the stack with (optional).
 *
 * @property {StackNode} top - The first node in the stack
 * @property {Number} size - The number of nodes in the stack
 */
export class Stack {
    constructor(value: any);
    top: any;
    size: number;
    /**
     * Adds a new value to the top of the stack
     *
     * @example
     * const s = new Stack([10,20]);
     * s.push(30); // [10,20,30]
     *
     * @param {Number} value - The value to add.
     * @returns {Stack} The current Stack instance.
     */
    push(value: number): Stack;
    /**
     * Removes the top value from the stack
     *
     * @example
     * const s = new Stack([10,20,30]);
     * s.pop(); // [10,20]
     *
     * @param {Boolean} returnNode - Whether to return the node or just the value.
     * @returns {Stack|*} The current Stack instance.
     */
    pop(returnNode?: boolean): Stack | any;
    /**
     * Removes all values from the stack
     *
     * @example
     * const s = new Stack([10,20,30]);
     * s.clear(); // []
     *
     * @returns {Stack} The current Stack instance.
     */
    clear(): Stack;
    /**
     * Returns the first value in the stack
     *
     * @example
     * const s = new Stack([10,20,30]);
     * s.peek(); // 10
     *
     * @param {Boolean} returnNode - Whether to return the node or just the value.
     * @returns {*|StackNode} The value in the first node.
     */
    peek(returnNode?: boolean): any | StackNode;
    /**
     * Prints the values in the stack
     *
     * @example
     * const s = new Stack([10,20,30]);
     * s.print(); // 10,20,30
     *
     * @returns {Stack} The current Stack instance.
     */
    print(): Stack;
    /**
     * Checks if the stack is empty
     *
     * @example
     * const s = new Stack();
     * s.isEmpty(); // true
     *
     * @returns {Boolean} Whether or not the stack is empty.
     */
    isEmpty(): boolean;
    /**
     * Returns the number of nodes in the stack
     *
     * @example
     * const s = new Stack([10,20,30]);
     * s.toArray(); // [10,20,30]
     *
     * @returns {Number} The number of nodes in the stack.
     */
    toArray(): number;
}
