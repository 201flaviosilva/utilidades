/**
 * @name StackNode
 * @class
 * @classdesc
 * Represents a node to be used in a Stack class
 * 
 * @param {*} value - The value to be stored in the node
 * 
 * @property {StackNode} next - The next node in the stack
 * @property {*} value - The value stored in the node
 */
export class Node {
	constructor(value) {
		if (!value) throw new Error("Node value cannot be undefined.");

		this.value = value;
		this.next = null;
	}
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
	constructor(value) {
		this.top = null;
		this.size = 0;

		if (Array.isArray(value)) value.forEach((v) => this.push(v));
		else if (value !== undefined) this.push(value);
	}

	/**
	 * Adds a new value to the top of the stack
	 * 
	 * @example
	 * const s = new Stack([10,20]);
	 * s.push(30); // [10,20,30]
	 * 
	 * @param {Number} value - The value to add.
	 * @returns {Stack} The current Stack instance.
	 * 
	 * @memberof Stack
	 */
	push(value) {
		const newNode = new Node(value);

		if (this.size === 0) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}

		this.size++;
		return this;
	}

	/**
	 * Removes the top value from the stack
	 * 
	 * @example
	 * const s = new Stack([10,20,30]);
	 * s.pop(); // [10,20]
	 * 
	 * @param {Boolean} returnNode - Whether to return the node or just the value.
	 * @returns {Stack|*} The current Stack instance.
	 * 
	 * @memberof Stack
	 */
	pop(returnNode = false) {
		if (this.size === 0) return undefined;

		const temp = this.top;

		this.top = temp.next;
		this.size--;

		return returnNode ? temp : temp.value;
	}

	/**
	 * Removes all values from the stack
	 * 
	 * @example
	 * const s = new Stack([10,20,30]);
	 * s.clear(); // []
	 * 
	 * @returns {Stack} The current Stack instance.
	 * 
	 * @memberof Stack
	 */
	clear() {
		this.top = null;
		this.size = 0;

		return this;
	}

	/**
	 * Returns the first value in the stack
	 * 
	 * @example
	 * const s = new Stack([10,20,30]);
	 * s.peek(); // 10
	 * 
	 * @param {Boolean} returnNode - Whether to return the node or just the value.
	 * @returns {*|StackNode} The value in the first node.
	 * 
	 * @memberof Stack
	 */
	peek(returnNode = false) {
		if (this.size === 0) return undefined;
		return returnNode ? this.top : this.top.value;
	}

	/**
	 * Prints the values in the stack
	 * 
	 * @example
	 * const s = new Stack([10,20,30]);
	 * s.print(); // 10,20,30
	 * 
	 * @returns {Stack} The current Stack instance.
	 * 
	 * @memberof Stack
	 */
	print() {
		let node = this.top;

		while (node) {
			console.log(node.value);
			node = node.next;
		}

		return this;
	}

	/**
	 * Checks if the stack is empty
	 * 
	 * @example
	 * const s = new Stack();
	 * s.isEmpty(); // true
	 * 
	 * @returns {Boolean} Whether or not the stack is empty.
	 * 
	 * @memberof Stack
	 */
	isEmpty() {
		return this.size === 0;
	}

	/**
	 * Returns the number of nodes in the stack
	 * 
	 * @example
	 * const s = new Stack([10,20,30]);
	 * s.toArray(); // [10,20,30]
	 * 
	 * @returns {Number} The number of nodes in the stack.
	 * 
	 * @memberof Stack
	 */
	toArray() {
		const arr = [];

		let node = this.top;

		for (let i = 0; i < this.size; i++) {
			arr.push(node.value);
			node = node.next;
		}

		return arr;
	}
}
