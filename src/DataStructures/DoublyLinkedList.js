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
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

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
class DoublyLinkedList {
	constructor(value) {
		this.head = null; // first node to be added
		this.tail = null;  // last node to be added
		this.size = 0;

		if (Array.isArray(value)) value.forEach((v) => this.push(v));
		else if (value !== undefined) this.push(value);
	}

	/**
	 * Prints the values of the linked list.
	 * 
	 * @example
	 * const dll = new DoublyLinkedList([10,20,30]);
	 * dll.print(); // 10,20,30
	 * 
	 * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
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
	 * Clears the linked list.
	 * 
	 * @example
	 * const dll = new DoublyLinkedList([10,20,30]);
	 * dll.clear();
	 * dll.toArray(); // []
	 * 
	 * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
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
	 * const dll = new DoublyLinkedList([10,20,30]);
	 * dll.get(1); // 20
	 * 
	 * @param {Number} index - The index of the value to retrieve.
	 * @param {Boolean} returnNode - Whether to return the Node or the value.
	 * @returns {Number|DLLNode} The value at the specified index, or the Node if returnNode is true.
	 */
	get(index, returnNode = false) {
		if (index < 0 || index >= this.size) return undefined;

		let temp = this.head;

		if (index < this.size / 2) {
			for (let i = 0; i < index; i++) {
				temp = temp.next;
			}
		} else {
			temp = this.tail;
			for (let i = this.size - 1; i > index; i--) {
				temp = temp.prev;
			}
		}

		return returnNode ? temp : temp.value;
	}

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
	set(index, value) {
		const node = this.get(index, true);
		if (!node) return false;

		node.value = value;
		return true;
	}

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
	unshift(value) {
		if (!this.head) return this.push(value);

		const newNode = new Node(value);

		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;

		this.size++;
		return this;
	}

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
	push(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.size++;
		return this;
	}

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
	insert(index, value) {
		if (index === 0) return this.unshift(value);
		else if (index === this.size) return this.push(value);
		else if (index < 0 || index > this.size) return false;

		const newNode = new Node(value);
		const beforeNode = this.get(index - 1, true);

		newNode.prev = beforeNode;
		newNode.next = beforeNode.next;

		beforeNode.next.prev = newNode;
		beforeNode.next = newNode;

		this.size++;
		return this;
	}

	/**
	 * Removes the value at the start of the linked list.
	 * 
	 * @example
	 * const dll = new DoublyLinkedList([10,20,30]);
	 * dll.shift(); // 20,30
	 * 
	 * @returns {Number} The value that was removed.
	 */
	shift() {
		if (this.size === 0) return;

		const temp = this.head;

		if (this.size > 1) {
			this.head = this.head.next;
			this.head.prev = null;
			temp.next = null;

			this.size--;

		} else this.clear();

		return temp.value;
	}

	/**
	 * Removes the value from the end of the linked list.
	 * 
	 * @example
	 * const dll = new DoublyLinkedList([10,20,30]);
	 * dll.pop(); // 10,20
	 * 
	 * @returns {Number} The value that was removed.
	 */
	pop() {
		if (this.size === 0) return;

		const temp = this.tail;

		if (this.size > 1) {
			this.tail = this.tail.prev;
			this.tail.next = null;
			temp.prev = null;

			this.size--;

		} else this.clear();

		return temp.value;
	}

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
	remove(index) {
		if (index < 0 || index >= this.size) return false;
		else if (index === 0) return this.shift();
		else if (index === this.size - 1) return this.pop();

		const node = this.get(index, true);
		const prev = node.prev;
		const next = node.next;

		prev.next = next;
		next.prev = prev;

		node.prev = null;
		node.next = null;

		this.size--;
		return node.value;
	}

	// TODO: Implement reverse()
	reverse() { }

	// TODO: Implement sort()
	sort() { }

	/**
	 * Returns an array representation of the linked list.
	 * 
	 * @example
	 * const dll = new DoublyLinkedList([10,20,30]);
	 * dll.toArray(); // [10,20,30]
	 * 
	 * @returns {Array} The array representation of the linked list.
	 */
	toArray() {
		const arr = [];

		let temp = this.head;
		while (temp !== null) {
			arr.push(temp.value);
			temp = temp.next;
		}

		return arr;
	}
}

export {
	DoublyLinkedList, Node
};

