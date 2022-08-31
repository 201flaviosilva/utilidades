/**
 * @class Node
 * @classdesc Create a node for BinarySearchTree
 */
export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.parent = null;
	}
}

/**
 * @class BinarySearchTree
 * @classdesc
 * Starts a Binary Search Tree algorithm
 * 
 * @see{@link https://en.wikipedia.org/wiki/Binary_search_tree}
 * 
 * @example 
 * const bst = new BinarySearchTree();
 * bst.add(1);
 * bst.add(0);
 * bst.delete(0);
 * 
 * @constructor
 */
export class BinarySearchTree {
	constructor() {
		this.root = null;
		this.count = 0;
	}

	/**
	 * Returns the number of nodes in the tree
	 * 
	 * @example 
	 * const bst = new BinarySearchTree();
	 * bst.add(1);
	 * bst.add(0);
	 * bst.add(2);
	 * bst.size(); // 3
	 * 
	 * @returns {number} Number of nodes
	 * @memberof BinarySearchTree
	 */
	size() { return this.count; }

	/**
	 * Add a new value to the Tree
	 * 
	 * @example 
	 * const bst = new BinarySearchTree();
	 * bst.add(1);
	 * bst.add(100);
	 * 
	 * @param {number} value - a number to add
	 * @memberof BinarySearchTree
	 */
	add(value) {
		if (typeof value !== "number" || isNaN(value)) {
			console.error("Value need to be a number!");
			return;
		}

		const node = new Node(value);

		if (this.root === null) {
			this.count++;
			this.root = node;
			return;
		}

		let current = this.root;
		while (current) {
			if (value === current.value) return; // Same Value
			else if (current.value > value) { // Left
				if (current.left === null) { // Empty
					node.parent = current;
					current.left = node;
					this.count++;
					break;
				} else current = current.left;

			} else { // Right
				if (current.right === null) { // Empty
					node.parent = current;
					current.right = node;
					this.count++;
					break;
				} else current = current.right;
			}
		}
	}

	/**
	 * Finds the smallest value in the tree.
	 *
	 * - If a value is passed it will look for the smallest value from that branch;
	 * - If no value is passed, it will start from the root;
	 * 
	 * @param {number} value - the value to start searching
	 * @returns {number} smaller value
	 * @memberof BinarySearchTree
	 */
	smaller(value) {
		if (!this.root) return;
		let current = this.search(value || this.root.value);
		do {
			if (current.left === null) { // No more Smaller number
				return current;
			} else {
				current = current.left;
			}
		} while (current);
	}

	/**
	 * Finds the largest value in the tree.
	 *
	 * - If a value is passed it will look for the largest value from that branch;
	 * - If no value is passed, it will start from the root;
	 * 
	 * @param {number} value - the value to start searching
	 * @returns {number} largest value
	 * @memberof BinarySearchTree
	 */
	larger(value) {
		if (!this.root) return;
		let current = this.search(value || this.root.value);
		do {
			if (current.right === null) { // No more Larger number
				return current;
			} else {
				current = current.right;
			}
		} while (current);
	}

	/**
	 * - Returns `false` if the number does not exist or if there is an error
	 * - If the number exists, return its node
	 * 
	 * @param {number} value - the value to find
	 * @returns {boolean|Node} if the value is in the Tree
	 * @memberof BinarySearchTree
	 */
	search(value) {
		if (typeof value !== "number") {
			console.error("Value need to be a number!");
			return false;
		}

		let current = this.root;
		while (current) {
			if (value === current.value) return current; // Same Value

			else if (current.value > value) { // Left
				if (current.left === null) return false; // There is no smaller number
				else current = current.left;

			} else { // Right
				if (current.right === null) return false; // There is no greater number
				else current = current.right;
			}
		}
	}

	/**
	 * Delete the node with the given value
	 * 
	 * @param {number} value - the value to delete
	 * @returns {boolean} if the node was deleted
	 * @memberof BinarySearchTree
	 */
	delete(value) {
		const node = this.search(value);
		if (!node) return false;

		if (node.left === null && node.right === null) { // No child
			if (node.parent.left.value === node.value) {
				node.parent.left = null;
			} else {
				node.parent.right = null;
			}

		} else if ((node.left !== null && node.right === null) || (node.left === null && node.right !== null)) { // One Child
			const fixChildNode = node.left || node.right;
			fixChildNode.parent = node.parent;
			if (node.parent.left.value === node.value) {
				node.parent.left = fixChildNode;
			} else {
				node.parent.right = fixChildNode;
			}

		} else if (node.left !== null && node.right !== null) { // Two children
			let currentNode = node.right;
			currentNode = this.smaller(currentNode.value);
			node.value = currentNode.value;
			currentNode.parent.left = null;


		} else console.error("Error deleting value"); // Error
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
