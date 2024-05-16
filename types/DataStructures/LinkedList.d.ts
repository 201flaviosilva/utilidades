/**
 * @class
 * @name LinkedList
 * @classdesc
 * Represents a linked list data structure.
 *
 * @see https://en.wikipedia.org/wiki/Linked_list
 *
 * @param {*} [value] - The value to initialize the list with (optional).
 *
 * @property {LLNode} head - The first node in the list
 * @property {LLNode} tail - The last node in the list
 * @property {Number} size - The number of nodes in the list
 */
export class LinkedList {
    constructor(value: any);
    head: any;
    tail: any;
    size: number;
    /**
     * Prints the values of the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push("Apple");
     * ll.push("Banana");
     * ll.push("Cherry");
     *
     * ll.print(); // Apple, Banana, Cherry
     *
     * @returns {LinkedList} The current LinkedList instance.
     */
    print(): LinkedList;
    /**
     * Clears the linked list, removing all elements.
     *
     * @returns {LinkedList} The current LinkedList instance.
     */
    clear(): LinkedList;
    /**
     * Retrieves the value at the specified index in the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.get(1); // 10
     *
     * @param {number} index - The index of the value to retrieve.
     * @param {boolean} [returnNode=false] - Specifies whether to return the Node instead of the value.
     * @returns {*} The value at the specified index, or undefined if index is out of bounds.
     */
    get(index: number, returnNode?: boolean): any;
    /**
     * Sets the value at the specified index in the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.set(1, 0); // 0
     *
     * @param {number} index - The index of the value to set.
     * @param {*} value - The new value to set.
     * @returns {boolean} True if the value was set successfully, false otherwise.
     */
    set(index: number, value: any): boolean;
    /**
     * Adds a new value at the start of the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.unshift(0); // 0,10,20,30
     *
     *
     * @param {*} value - The value to add.
     * @returns {LinkedList} The current LinkedList instance.
     */
    unshift(value: any): LinkedList;
    /**
     * Adds a new value at the end of the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10); // 10
     * ll.push(20); // 10,20
     * ll.push(30); // 10,20,30
     *
     * @param {*} value - The value to add.
     * @returns {LinkedList} The current LinkedList instance.
     */
    push(value: any): LinkedList;
    /**
     * Adds a new value at the given index of the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.insert(1,55); // 10,55,20,30
     *
     * @param {number} index - The index at which to add the value.
     * @param {*} value - The value to add.
     * @returns {boolean} True if the value was added successfully, false otherwise.
     */
    insert(index: number, value: any): boolean;
    /**
     * Removes the value at the start of the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.shift(); // 20,30
     *
     * @returns {*} The removed value, or undefined if the list is empty.
     */
    shift(): any;
    /**
     * Removes the value from the end of the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.pop(); // 10,20
     *
     * @returns {*} The removed value, or undefined if the list is empty.
     */
    pop(): any;
    /**
     * Removes the value at the given index of the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.shift(1); // 10,30
     *
     * @param {number} index - The index at which to remove the value.
     * @returns {*} The removed value, or undefined if the index is out of bounds.
     */
    remove(index: number): any;
    /**
     * Reverses the order of the linked list.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.reverse(); // 30,20,10
     *
     * @returns {LinkedList} The current LinkedList instance.
     */
    reverse(): LinkedList;
    /**
     * Sorts the linked list in ascending order.
     *
     * @example
     * const ll = new LinkedList([50,20,40,10,30]);
     * ll.sort(); // 10,20,30,40,50
     *
     * @returns {LinkedList} The current LinkedList instance.
     */
    sort(): LinkedList;
    /**
     * Converts the linked list to an array.
     *
     * @example
     * const ll = new LinkedList();
     * ll.push(10);
     * ll.push(20);
     * ll.push(30);
     *
     * ll.toArray(); // [10,20,30]
     *
     * @returns {Array} An array containing the values of the linked list.
     */
    toArray(): any[];
}
/**
 * @class
 * @name LLNode
 * @classdesc Represents a node in a linked list.
 *
 * @param {*} [value] - The value to be stored in the node.
 *
 * @property {*} value - The value stored in the node
 * @property {LLNode} next - The next node in the list
 */
export class Node {
    constructor(value: any);
    value: any;
    next: any;
}
