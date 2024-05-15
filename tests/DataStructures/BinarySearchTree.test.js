import { describe, expect, it, test } from "vitest";
import { DataStructures } from "./src/main";
const { BinarySearchTree, BinarySearchTreeInstance, BSTNode: Node } = DataStructures;

describe("BinarySearchTree.js", () => {
	/**
	 * 						100
	 * 					/		\
	 * 				50			125
	 *		          \			/   \
	 * 				  75	  111	150		
	 * 				 /  \
	 * 				66   88
	 */
	const values = [100, 50, 125, 111, 75, 66, 150, 88];

	describe("BinarySearchTree", () => {
		describe("constructor()", () => {
			it("should the root be null", () => {
				const bst = new BinarySearchTree();

				expect(bst.root).toBe(null);
				expect(bst.count).toBe(0);
				expect(bst).toMatchSnapshot();
			});

			it("should the root node have the given value", () => {
				const bst = new BinarySearchTree(100);

				expect(bst.root).toBeInstanceOf(Node);
				expect(bst.root.value).toBe(100);
				expect(bst.root.left).toBe(null);
				expect(bst.root.right).toBe(null);

				expect(bst.count).toBe(1);
			});

			it("should the root node have the given array [100, 50, 125]", () => {
				const bst = new BinarySearchTree([100, 50, 125]);

				expect(bst.root).toBeInstanceOf(Node);
				expect(bst.root.value).toBe(100);
				expect(bst.root.left.value).toBe(50);
				expect(bst.root.right.value).toBe(125);

				expect(bst.count).toBe(3);
			});

			it("should throw an error if the value is not a number", () => {
				expect(() => new BinarySearchTree("A")).toThrow("Node value must be a number.");
			});

			it("should match a full tree with the snapshot", () => {
				const bst = new BinarySearchTree(values);

				expect(bst).toMatchSnapshot();
			});
		});

		describe("add()", () => {
			it("should add a single value to the left [10, 5]", () => {
				const bst = new BinarySearchTree(10);

				const root = bst.root;
				expect(root.value).toBe(10);

				bst.add(5);
				const n1 = root.left;
				expect(n1.value).toBe(5);
			});

			it("should add a single value to the right [10, 20]", () => {
				const bst = new BinarySearchTree(10);

				const root = bst.root;
				expect(root.value).toBe(10);

				bst.add(20);
				const n1 = root.right;
				expect(n1.value).toBe(20);
			});

			it("should add a single value to the left and right [10, 5, 20]", () => {
				const bst = new BinarySearchTree(10);

				const root = bst.root;
				expect(root.value).toBe(10);

				bst.add(5);
				const l1 = root.left;
				expect(l1.value).toBe(5);

				bst.add(20);
				const r1 = root.right;
				expect(r1.value).toBe(20);
			});

			it("should not add a value that already exists", () => {
				const bst = new BinarySearchTree(0);

				bst.add(0);
				expect(bst.root.value).toBe(0);
				expect(bst.root.left).toBe(null);
				expect(bst.root.right).toBe(null);
			});

			test("[E2E] should add multiples mixed values: [100, 50, 125, 111, 75, 66, 150, 88]", () => {
				const bst = new BinarySearchTree();

				bst.add(100);
				bst.add(50); // left
				bst.add(125); // right
				bst.add(111); // right -> left
				bst.add(75); // left -> right
				bst.add(66); // left -> right -> left
				bst.add(150); // right -> right
				bst.add(88); // left -> right -> right

				const root = bst.root;
				expect(root.value).toBe(100);

				const left = root.left;
				expect(left.value).toBe(50);

				const right = root.right;
				expect(right.value).toBe(125);

				const rightLeft = right.left;
				expect(rightLeft.value).toBe(111);

				const leftRight = left.right;
				expect(leftRight.value).toBe(75);

				const leftRightLeft = leftRight.left;
				expect(leftRightLeft.value).toBe(66);

				const rightRight = right.right;
				expect(rightRight.value).toBe(150);

				const leftRightRight = leftRight.right;
				expect(leftRightRight.value).toBe(88);
			});
		});

		describe("smaller()", () => {
			it("should return the smallest value in the tree", () => {
				const bst = new BinarySearchTree(values);
				expect(bst.smaller()).toBe(50);
			});

			it("should return the smallest value in the tree from a given value", () => {
				const bst = new BinarySearchTree(values);
				expect(bst.smaller(100)).toBe(50);
				expect(bst.smaller(50)).toBe(50);
				expect(bst.smaller(125)).toBe(111);
				expect(bst.smaller(111)).toBe(111);
				expect(bst.smaller(75)).toBe(66);
				expect(bst.smaller(66)).toBe(66);
				expect(bst.smaller(150)).toBe(150);
				expect(bst.smaller(88)).toBe(88);
			});

			it("should return undefined if the tree is empty", () => {
				const bst = new BinarySearchTree();
				expect(bst.smaller()).toBeUndefined();
			});

			it("should return null if the value is not in the tree", () => {
				const bst = new BinarySearchTree(values);

				expect(bst.smaller(0)).toBeNull();
				expect(bst.smaller(-100)).toBeNull();
				expect(bst.smaller(55)).toBeNull();
				expect(bst.smaller(1000)).toBeNull();
			});
		});

		describe("larger()", () => {
			it("should return the largest value in the tree", () => {
				const bst = new BinarySearchTree(values);
				expect(bst.larger()).toBe(150);
			});

			it("should return the largest value in the tree from a given value", () => {
				const bst = new BinarySearchTree(values);
				expect(bst.larger(100)).toBe(150);
				expect(bst.larger(50)).toBe(88);
				expect(bst.larger(125)).toBe(150);
				expect(bst.larger(111)).toBe(111);
				expect(bst.larger(75)).toBe(88);
				expect(bst.larger(66)).toBe(66);
				expect(bst.larger(150)).toBe(150);
				expect(bst.larger(88)).toBe(88);
			});

			it("should return undefined if the tree is empty", () => {
				const bst = new BinarySearchTree();
				expect(bst.larger()).toBeUndefined();
			});

			it("should return null if the value is not in the tree", () => {
				const bst = new BinarySearchTree(values);

				expect(bst.larger(0)).toBeNull();
				expect(bst.larger(-100)).toBeNull();
				expect(bst.larger(55)).toBeNull();
				expect(bst.larger(1000)).toBeNull();
			})
		});

		describe("search()", () => {
			it("should return the node/value", () => {
				const bst = new BinarySearchTree(values);

				expect(bst.search(100)).toBeInstanceOf(Node);

				expect(bst.search(100).value).toBe(100);
				expect(bst.search(50).value).toBe(50);
				expect(bst.search(125).value).toBe(125);
				expect(bst.search(150).value).toBe(150);
				expect(bst.search(88).value).toBe(88);

				expect(bst.search(100, false)).toBe(true);
				expect(bst.search(50, false)).toBe(true);
				expect(bst.search(125, false)).toBe(true);
			});

			it("should return undefined if the tree is empty", () => {
				const bst = new BinarySearchTree();
				expect(bst.search()).toBeUndefined();
			});

			it("should return null if the value is not in the tree", () => {
				const bst = new BinarySearchTree(values);

				expect(bst.search(0)).toBeNull();
				expect(bst.search(-100)).toBeNull();
				expect(bst.search(55)).toBeNull();
				expect(bst.search(1000)).toBeNull();
			});

			it("should return a error if the value is not a number", () => {
				const bst = new BinarySearchTree(values);

				expect(() => bst.search("A")).toThrowError("Value need to be a number!");
			});
		});

		describe("delete()", () => {
			it("should remove the root node", () => {
				const bst = new BinarySearchTree(100);

				bst.delete(100);
				expect(bst.search(100)).toBeUndefined();
				expect(bst.count).toBe(0);
			});

			it("should remove an no child node", () => {
				const bst = new BinarySearchTree([100, 50, 150]);

				// Left
				bst.delete(50);
				expect(bst.search(50)).toBeNull();
				expect(bst.count).toBe(2);

				// Right
				bst.delete(150);
				expect(bst.search(150)).toBeNull();
				expect(bst.count).toBe(1);
			});

			it("should remove the root node with one left child", () => {
				const bst = new BinarySearchTree([100, 50]);

				bst.delete(100);
				expect(bst.search(100)).toBeNull();
				expect(bst.root.value).toBe(50);
				expect(bst.count).toBe(1);
			});

			it("should remove an one child node on the left", () => {
				const bst = new BinarySearchTree([100, 50, 25]);

				bst.delete(50);
				expect(bst.search(50)).toBeNull();

				expect(bst.root.left.value).toBe(25);
				expect(bst.count).toBe(2);
			});

			it("should remove an one child node on the right", () => {
				const bst = new BinarySearchTree([100, 125, 150]);

				bst.delete(125);
				expect(bst.search(125)).toBeNull();

				expect(bst.root.right.value).toBe(150);
				expect(bst.count).toBe(2);
			});

			it("should remove a node with two children", () => {
				const bst = new BinarySearchTree(values);

				bst.delete(125);
				expect(bst.search(125)).toBeNull();

				expect(bst.root.right.value).toBe(111);
				expect(bst.root.right.left).toBeNull();
				expect(bst.root.right.right.value).toBe(150);
				expect(bst.count).toBe(7);
			});

			it("should return null if node is not found", () => {
				const bst = new BinarySearchTree(values);
				expect(bst.delete(0, true)).toBeNull();
			});
		})
	});

	describe("Node", () => {
		it("should have a value", () => {
			const node = new Node(100);

			expect(node.value).toBe(100);
			expect(node.left).toBeNull();
			expect(node.right).toBeNull();
			expect(node).toMatchSnapshot();
		});

		it("should return a error if the value is not a number", () => {
			expect(() => new Node()).toThrowError("Node value cannot be undefined.");
			expect(() => new Node(false)).toThrowError("Node value must be a number.");
			expect(() => new Node("A")).toThrowError("Node value must be a number.");
		});
	});
});
