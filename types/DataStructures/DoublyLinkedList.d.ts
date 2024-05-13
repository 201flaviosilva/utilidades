/**
 * Represents a doubly linked list data structure.
 *
 * @memberof DataStructures
 */
export class DoublyLinkedList {
    /**
     * Creates a new DoublyLinkedList instance.
     *
     * @example
     * new DoublyLinkedList();
     * new DoublyLinkedList("Beep");
     * new DoublyLinkedList([10,20,30]);
     *
     * @param {Array|*} value - The value to initialize the list with (optional).
     */
    constructor(value: any[] | any);
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
     *
     * @memberof DoublyLinkedList
     * @method print
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
     *
     * @memberof DoublyLinkedList
     * @method clear
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
     * @returns {Number|Node} The value at the specified index, or the Node if returnNode is true.
     *
     * @memberof DoublyLinkedList
     * @method get
     */
    get(index: number, returnNode?: boolean): number | Node;
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
     *
     * @memberof DoublyLinkedList
     * @method set
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
     *
     * @memberof DoublyLinkedList
     * @method unshift
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
     *
     * @memberof DoublyLinkedList
     * @method push
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
     *
     * @memberof DoublyLinkedList
     * @method insert
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
     *
     * @memberof DoublyLinkedList
     * @method shift
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
     *
     * @memberof DoublyLinkedList
     * @method pop
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
     *
     * @memberof DoublyLinkedList
     * @method remove
     */
    remove(index: number): number;
    reverse(): void;
    sort(): void;
    /**
     * Returns an array representation of the linked list.
     *
     * @example
     * const dll = new DoublyLinkedList([10,20,30]);
     * dll.toArray(); // [10,20,30]
     *
     * @returns {Array} The array representation of the linked list.
     *
     * @memberof DoublyLinkedList
     * @method toArray
     */
    toArray(): any[];
}
/**
 * @class DLLNode
 * @classdesc Represents a node in a doubly linked list.
 *
 * @memberof DataStructures
 */
export class Node {
    /**
     * Creates a new Node instance.
     * @param {*} value - The value to be stored in the node.
     */
    constructor(value: any);
    value: any;
    next: any;
    prev: any;
}
