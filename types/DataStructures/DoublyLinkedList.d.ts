/**
 * @class
 * @name DoublyLinkedList
 * @classdesc
 * Represents a doubly linked list data structure.
 *
 * @see https://en.wikipedia.org/wiki/Doubly_linked_list
 *
 * @example
 * new DoublyLinkedList();
 * new DoublyLinkedList("Beep");
 * new DoublyLinkedList([10,20,30]);
 *
 * @param {Array|*} value - The value to initialize the list with (optional).
 *
 * @property {DLLNode} head - The first node in the list
 * @property {DLLNode} tail - The last node in the list
 * @property {Number} size - The number of nodes in the list
 */
export class DoublyLinkedList {
    constructor(value: any);
    head: any;
    tail: any;
    size: number;
    /**
     * Prints the values of the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.print(); // 10,20,30
     *
     * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
     */
    print(): DoublyLinkedList;
    /**
     * Clears the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.clear();
     * dll.toArray(); // []
     *
     * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
     */
    clear(): DoublyLinkedList;
    /**
     * Retrieves the value at the specified index in the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.get(1); // 20
     *
     * @param {Number} index - The index of the value to retrieve.
     * @param {Boolean} returnNode - Whether to return the Node or the value.
     * @returns {Number|DLLNode} The value at the specified index, or the Node if returnNode is true.
     */
    get(index: number, returnNode?: boolean): number | DLLNode;
    /**
     * Sets the value at the specified index in the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.set(1, 0); // 0
     *
     * @param {Number} index - The index of the value to set.
     * @param {Number} value - The new value to set.
     * @returns {Boolean} True if the value was set successfully, false otherwise.
     */
    set(index: number, value: number): boolean;
    /**
     * Adds a new value to the beginning of the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.unshift(0); // 0,10,20,30
     *
     * @param {Number} value - The value to add.
     * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
     */
    unshift(value: number): DoublyLinkedList;
    /**
     * Adds a new value to the end of the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.push(40); // 10,20,30,40
     *
     * @param {Number} value - The value to add.
     * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
     */
    push(value: number): DoublyLinkedList;
    /**
     * Inserts a new value at the specified index in the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.insert(1, 0); // 0,10,20,30
     *
     * @param {Number} index - The index to insert the value at.
     * @param {Number} value - The value to insert.
     * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
     */
    insert(index: number, value: number): DoublyLinkedList;
    /**
     * Removes the value at the start of the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.shift(); // 20,30
     *
     * @returns {Number} The value that was removed.
     */
    shift(): number;
    /**
     * Removes the value from the end of the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.pop(); // 10,20
     *
     * @returns {Number} The value that was removed.
     */
    pop(): number;
    /**
     * Removes the value at the given index of the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.remove(1); // 10,30
     *
     * @param {Number} index - The index of the value to remove.
     * @returns {Number} The value that was removed.
     */
    remove(index: number): number;
    /**
     * Reverses the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.reverse(); // 30,20,10
     *
     * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
     */
    reverse(): DoublyLinkedList;
    /**
     * Sorts the linked list in ascending order.
     *
     * @example
     * const dll = new DoublyLinkedList([50,20,40,10,30]);
     * dll.sort(); // 10,20,30,40,50
     *
     * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
     */
    sort(): DoublyLinkedList;
    /**
     * Returns an array representation of the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.toArray(); // [10,20,30]
     *
     * @returns {Array} The array representation of the linked list.
     */
    toArray(): any[];
}
/**
 * @class
 * @name DLLNode
 * @classdesc Represents a node in a doubly linked list.
 *
 * @param {*} [value] - The value to be stored in the node.
 *
 * @property {*} value - The value stored in the node
 * @property {DLLNode|null} next - The next node in the list
 */
export class Node {
    constructor(value: any);
    value: any;
    next: any;
    prev: any;
}
