/**
 * @class LLNode
 * @classdesc Represents a node in a linked list.
 *
 * @memberof DataStructures
 */
declare class Node {
    /**
     * Creates a new Node instance.
     * @param {*} value - The value to be stored in the node.
     */
    constructor(value: any);
    value: any;
    next: any;
}
/**
 * Represents a linked list data structure.
 *
 * @memberof DataStructures
 */
export class LinkedList {
    /**
     * Creates a new LinkedList instance.
     * @param {*} value - The value to initialize the list with (optional).
     */
    constructor(value: any);
    head: Node;
    tail: Node;
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
     *
     * @memberof LinkedList
     */
    print(): LinkedList;
    /**
     * Clears the linked list, removing all elements.
     *
     * @returns {LinkedList} The current LinkedList instance.
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
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
     *
     * @memberof LinkedList
     */
    reverse(): LinkedList;
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
     *
     * @memberof LinkedList
     */
    toArray(): any[];
}
export { Node as LLNode };
