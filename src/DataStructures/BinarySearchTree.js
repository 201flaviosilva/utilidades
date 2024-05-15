import { isValidNumber } from "../Maths/isValidNumber.js";

/**
 * @class
 * @name BSTNode
 * @classdesc Create a node for BinarySearchTree
 * 
 * @param {number} value - The value to be stored in the node
 * 
 * @property {number} value - The value stored in the node
 * @property {BSTNode|null} left - The left node in the tree
 * @property {BSTNode|null} right - The right node in the tree
 */
export class Node {
	constructor(value) {
		if (value === undefined) throw new Error("Node value cannot be undefined.");
		else if (!isValidNumber(value)) throw new Error("Node value must be a number.");

		this.value = value;
		this.left = null;
		this.right = null;
		// this.count = 1; // TODO: Used for repeated values
	}
}

/**
 * @class
 * @name BinarySearchTree
 * @classdesc 
 * Starts a Binary Search Tree algorithm
 * 
 * Online example {@link https://8jn8z1.csb.app/}
 * 
 * @see{@link https://en.wikipedia.org/wiki/Binary_search_tree}
 * 
 * 
 * @example 
 * const bst = new BinarySearchTree();
 * bst.add(1);
 * bst.add(0);
 * bst.delete(0);
 * 
 * @param {number[]|number} [value] - The value to start the tree
 * 
 * @property {BSTNode|null} root - The root node of the tree
 * @property {number} count - The number of nodes in the tree
 */
export class BinarySearchTree {
	constructor(value) {
		this.root = null;
		this.count = 0;

		if (Array.isArray(value)) value.forEach((v) => this.add(v));
		else if (value !== undefined) this.add(value);
	}

	/**
	 * Add a new value to the Tree
	 * 
	 * @example 
	 * const bst = new BinarySearchTree();
	 * bst.add(1);
	 * bst.add(100);
	 * 
	 * @param {number} value - a number to add
	 */
	add(value) {
		if (!isValidNumber(value)) throw new Error("Node value must be a number.");

		const newNode = new Node(value);

		if (this.root === null) this.root = newNode;
		else this._insertNode(this.root, newNode);

		this.count++;

		return this;
	}

	/**
	 * Finds the smallest value in the tree.
	 *
	 * - If a value is passed it will look for the smallest value from that branch;
	 * - If no value is passed, it will start from the root;
	 * 
	 * @param {number|undefined} [value] - the value to start searching
	 * @returns {number|undefined|null} smaller value
	 */
	smaller(value) {
		if (!this.root) return;

		let current = this.search(value ?? this.root.value);
		if (!current) return null;

		do {
			if (current.left === null) return current.value; // No more Smaller number
			else current = current.left;
		} while (current);
	}

	/**
	 * Finds the largest value in the tree.
	 *
	 * - If a value is passed it will look for the largest value from that branch;
	 * - If no value is passed, it will start from the root;
	 * 
	 * @param {number} value - the value to start searching
	 * @returns {number|undefined|null} largest value
	 */
	larger(value) {
		if (!this.root) return;

		let current = this.search(value ?? this.root.value);
		if (!current) return null;

		do {
			if (current.right === null) return current.value; // No more Larger number
			else current = current.right;
		} while (current);
	}

	/**
	 * - Returns `false` if the number does not exist or if there is an error
	 * - If the number exists, return its node/true
	 * 
	 * @param {number} value - the value to find
	 * @param {boolean} [returnNode=true] - if the node should be returned
	 * @returns {BSTNode|null} if the value is in the Tree
	 */
	search(value, returnNode = true) {
		if (!this.root) return;
		if (!isValidNumber(value)) throw new Error("Value need to be a number!");

		let current = this.root;
		while (current) {
			if (value === current.value) return returnNode ? current : true; // Same Value
			else if (current.value > value) current = current.left;// Left
			else current = current.right; // Right
		}

		return null;
	}

	/**
	 * Delete the node with the given value
	 * 
	 * @param {number} value - the value to delete
	 * @param {boolean} [returnNode=false] - if the node should be returned
	 * @returns {BSTNode|BinarySearchTree} if the value is in the Tree
	 */
	delete(value, returnNode = false) {
		const node = this.search(value);
		if (!node) return returnNode ? node : this;

		const parent = this._findParent(node);

		if (node.left === null && node.right === null) { // No child
			if (!parent) this.root = null;
			else if (parent.left === node) parent.left = null;
			else parent.right = null;

		} else if (node.left === null || node.right === null) { // One child
			if (!parent) this.root = node.left || node.right;
			else if (parent.left === node) parent.left = node.left || node.right;
			else parent.right = node.left || node.right;

		} else { // Two children
			const smaller = this.smaller(node.value);
			this.delete(smaller);

			if (parent.left === node) parent.left.value = smaller;
			else parent.right.value = smaller;

			return returnNode ? node : this; // To prevent count decrease (again)
		}

		this.count--;
		return returnNode ? node : this;
	}

	/**
	 * Returns a string representation of the tree
	 * 
	 * @returns {string} the string representation
	 */
	toString() {
		return JSON.stringify(this, null, 2);
	}

	/**
	 * Inserts a new node into the tree
	 * 
	 * Note 1: This is a recursive function
	 * Note 2: This function is used in the add method
	 * 
	 * @param {BSTNode} node - the node to insert
	 * @param {BSTNode} newNode - the new node
	 * 
	 * @private
	 */
	_insertNode(node, newNode) {
		if (newNode.value === node.value) return this;
		else if (newNode.value < node.value) {
			if (node.left === null) node.left = newNode;
			else this._insertNode(node.left, newNode);
		} else {
			if (node.right === null) node.right = newNode;
			else this._insertNode(node.right, newNode);
		}

		return this;
	}

	/**
	 * This function finds the parent of the given node
	 * 
	 * @param {BSTNode} node - the node to find the parent
	 * @returns {BSTNode|null} the parent of the given node
	 * 
	 * @private
	 */
	_findParent({ value }) {
		let current = this.root;

		while (current) {
			if (value > current.value) { // Right
				if (current.right.value === value) return current;
				current = current.right;

			} else if (value < current.value) { // Left
				if (current.left.value === value) return current;
				current = current.left;

			} else return null; // No parent
		}

		return null; // Should never enter here
	}
}

/**
 * 
 * @example 
 * BinarySearchTreeInstance.add(1);
 * BinarySearchTreeInstance.add(0);
 * BinarySearchTreeInstance.delete(0);
 */
export const BinarySearchTreeInstance = new BinarySearchTree();
