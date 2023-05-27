/**
 * @class LLNode
 * @classdesc Represents a node in a linked list.
 * 
 * @memberof DataStructures
 */
class Node {
	/**
	 * Creates a new Node instance.
	 * @param {*} value - The value to be stored in the node.
	 */
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

/**
 * Represents a linked list data structure.
 * 
 * @memberof DataStructures
 */
class LinkedList {
	/**
	 * Creates a new LinkedList instance.
	 * @param {*} value - The value to initialize the list with (optional).
	 */
	constructor(value) {
		if (value !== undefined) {
			const newNode = new Node(value);
			this.head = newNode;
			this.tail = newNode;
			this.size = 1;
		} else {
			this.head = null;
			this.tail = null;
			this.size = 0;
		}
	}

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
	print() {
		let temp = this.head;
		while (temp !== null) {
			console.log(temp.value);
			temp = temp.next;
		}
		return this;
	}

	/**
	 * Clears the linked list, removing all elements.
	 * 
	 * @returns {LinkedList} The current LinkedList instance.
	 * 
	 * @memberof LinkedList
	 */
	clear() {
		this.head = null;
		this.tail = null;
		this.size = 0;
		return this;
	}

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
	get(index, returnNode = false) {
		if (index < 0 || index >= this.size) return undefined;

		let count = 0;
		let temp = this.head;
		while (temp !== null) {
			if (count === index) return returnNode ? temp : temp.value;
			temp = temp.next;
			count++;
		}

		return temp; // Should never reach here
	}

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
	set(index, value) {
		const node = this.get(index, true);
		if (!node) return false;

		node.value = value;
		return true;
	}

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
	unshift(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;

		if (!this.tail) this.tail = newNode;

		this.size++;

		return this;
	}

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
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.size++;
		return this;
	}

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
	insert(index, value) {
		if (index === 0) return this.unshift(value);
		else if (index === this.size) return this.push(value);
		else if (index < 0 || index > this.size) return false;

		const newNode = new Node(value);
		const temp = this.get(index - 1, true);

		newNode.next = temp.next;
		temp.next = newNode;

		this.size++;
		return this;
	}

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
	shift() {
		if (!this.size) return undefined;

		const removedValue = this.head.value;

		this.head = this.head.next;

		this.size--;

		if (this.size === 0) this.clear();
		return removedValue;
	}

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
	pop() {
		if (!this.size) return undefined;

		let pre = this.head;
		let temp = this.head;
		while (temp.next !== null) {
			pre = temp;
			temp = temp.next;
		}

		this.tail = pre;
		this.tail.next = null;

		this.size--;

		if (this.size === 0) this.clear();
		return temp.value;
	}

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
	remove(index) {
		if (index === 0) return this.shift();
		else if (index === this.size) return this.pop();
		else if (index < 0 || index > this.size) return undefined;

		const before = this.get(index - 1, true); // Element before to remove
		const temp = before.next; // Current element to remove
		before.next = temp.next;
		temp.next = null;

		this.size--;
		return temp.value;
	}

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
	reverse() {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;

		let prev = null;
		let next = null;

		for (let i = 0; i < this.size; i++) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}

		return this;
	}

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
	toArray() {
		const result = [];

		let temp = this.head;
		while (temp !== null) {
			result.push(temp.value);
			temp = temp.next;
		}

		return result;
	}
}

export {
	Node as LLNode,
	LinkedList,
};
