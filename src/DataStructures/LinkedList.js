import { isValidNumber } from "../Maths";

export class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export class LinkedList {
	constructor(value) {
		if (isValidNumber(value)) {
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

	// Add a new value to the END of the list
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

	// Remove a value from the END of the list
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

	// Add a new value to the BEGINNING of the list
	unshift(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;

		if (!this.tail) this.tail = newNode;

		this.size++;

		return this;
	}

	// Add a new value to the given index of the list
	insert(value, index) {
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
