export class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export class LinkedList {
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

	print() {
		let temp = this.head;
		while (temp !== null) {
			console.log(temp.value);
			temp = temp.next;
		}
		return this;
	}

	clear() {
		this.head = null;
		this.tail = null;
		this.size = 0;
		return this;
	}

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

	set(index, value) {
		const node = this.get(index, true);
		if (!node) return false;

		node.value = value;
		return true;
	}

	// ADD a new value to the START of the list
	unshift(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;

		if (!this.tail) this.tail = newNode;

		this.size++;

		return this;
	}

	// ADD a new value to the END of the list
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

	// ADD a new value to the given index of the list
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

	// REMOVE a value to the START of the list
	shift() {
		if (!this.size) return undefined;

		const removedValue = this.head.value;

		this.head = this.head.next;

		this.size--;

		if (this.size === 0) this.clear();
		return removedValue;
	}

	// REMOVE a value from the END of the list
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

	// REMOVE a value in the given index of the list
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
