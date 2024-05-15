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
	constructor(value) {
		this.value = value;
		this.next = null;
	}
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
	constructor(value) {
		this.first = null; // First node to be out
		this.last = null; // Last node to be out
		this.size = 0;

		if (Array.isArray(value)) value.forEach((v) => this.enqueue(v));
		else if (value !== undefined) this.enqueue(value);
	}

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
	enqueue(value) {
		const newNode = new Node(value);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		this.size++;
		return this;
	}

	/**
	 * Removes and returns the first value in the queue
	 * 
	 * @example
	 * const q = new Queue([10,20,30]);
	 * q.dequeue(); // [20,30]
	 * 
	 * @returns {Queue} The current Queue instance.
	 */
	dequeue(returnNode = false) {
		let temp = this.first;

		if (this.size === 0) return undefined;
		else if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
			temp.next = null;
		}

		this.size--;
		return returnNode ? temp : temp.value;
	}

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
	peek(returnNode = false) {
		if (this.size === 0) return undefined;
		return returnNode ? this.first : this.first.value;
	}

	/**
	 * Clears the queue
	 * 
	 * @example
	 * const q = new Queue([10,20,30]);
	 * q.clear(); // []
	 * 
	 */
	clear() {
		this.first = null;
		this.last = null;
		this.size = 0;

		return this;
	}

	/**
	 * Prints the values of the queue
	 * 
	 * @example
	 * const q = new Queue([10,20,30]);
	 * q.print(); // 10,20,30
	 * 
	 * @returns {Queue} The current Queue instance.
	 */
	print() {
		let node = this.first;

		while (node) {
			console.log(node.value);
			node = node.next;
		}

		return this;
	}

	/**
	 * Checks if the queue is empty
	 * 
	 * @example
	 * const q = new Queue([10,20,30]);
	 * q.isEmpty(); // false
	 * 
	 * @returns {Boolean} Whether or not the queue is empty.
	 */
	isEmpty() {
		return this.size === 0;
	}

	/**
	 * Returns a new array of the values in the queue
	 * 
	 * @example
	 * const q = new Queue([10,20,30]);
	 * q.toArray(); // [10,20,30]
	 * 
	 * @returns {Array} An array of the values in the queue.
	 */
	toArray() {
		const arr = [];

		let node = this.first;

		for (let i = 0; i < this.size; i++) {
			arr.push(node.value);
			node = node.next;
		}

		return arr;
	}
}
