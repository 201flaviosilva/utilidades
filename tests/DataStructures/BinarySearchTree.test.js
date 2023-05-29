import { Node } from "./src/DataStructures/BinarySearchTree.js";
import { DataStructures } from "./src/main";
const { BinarySearchTree, BinarySearchTreeInstance } = DataStructures;

describe.skip("BinarySearchTree.js", () => {
	describe("BinarySearchTree", () => {
		describe("constructor()", () => {
			it("should the root be null", () => {
				const bst = new BinarySearchTree();
				expect(bst.root).toBe(null);
				expect(bst.count).toBe(0);
			});

			it("should the root node have the given value", () => {
				const bst = new BinarySearchTree(100);
				expect(bst.root).toBeInstanceOf(Node);
				expect(bst.root.value).toBe(100);
				expect(bst.root.left).toBe(null);
				expect(bst.root.right).toBe(null);
				expect(bst.root.parent).toBe(null);

				expect(bst.count).toBe(1);
			});
		});

		describe("size()", () => {
			it("should the size of the tree be 0 at the start", () => {
				const bst = new BinarySearchTree();
				expect(bst.size()).toBe(0);
			});

			it("should add a initial value and the size of the tree be 1 at the start", () => {
				const bst = new BinarySearchTree(100);
				expect(bst.size()).toBe(1);
			});

			it("should add 3 values and the size of the tree should be 3", () => {
				const bst = new BinarySearchTree();
				expect(bst.size()).toBe(0);

				bst.add(100);
				expect(bst.size()).toBe(1);

				bst.add(50);
				expect(bst.size()).toBe(2);

				bst.add(150);
				expect(bst.size()).toBe(3);
			});
		});

		describe("add()", () => {
			it("should add multiple values to the left [0, -1, -2, -3]", () => {
				const bst = new BinarySearchTree(0);

				bst.add(-1);
				bst.add(-2);
				bst.add(-3);

				const root = bst.root;
				expect(root.value).toBe(0);

				const v1 = root.left;
				expect(v1.value).toBe(-1);

				const v2 = v1.left;
				expect(v2.value).toBe(-2);

				const v3 = v2.left;
				expect(v3.value).toBe(-3);
			});

			it("should add multiple values to the right [0, 1, 2, 3]", () => {
				const bst = new BinarySearchTree(0);

				bst.add(1);
				bst.add(2);
				bst.add(3);

				const root = bst.root;
				expect(root.value).toBe(0);

				const v1 = root.right;
				expect(v1.value).toBe(1);

				const v2 = v1.right;
				expect(v2.value).toBe(2);

				const v3 = v2.right;
				expect(v3.value).toBe(3);
			});

			it("should add multiples mixed values: [100, 50, 125, 111, 75, 66, 150, 88]", () => {
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

			it("should not add a value that already exists", () => {
				const bst = new BinarySearchTree(0);

				expect(bst.root.value).toBe(0);
				expect(bst.root.left).toBe(null);
				expect(bst.root.right).toBe(null);

				bst.add(0);
				expect(bst.root.value).toBe(0);
				expect(bst.root.left).toBe(null);
				expect(bst.root.right).toBe(null);
			});
		});

		describe("smaller()", () => {
			it("should return undefined if the tree is empty", () => {
				const bst = new BinarySearchTree();
				expect(bst.smaller()).toBe(undefined);
			});

			it("should add multiples mixed values and return the smaller (-100): [0, 100, 50, -50, -4, -49, -100, -88]", () => {
				const bst = new BinarySearchTree(0);
				expect(bst.smaller()).toBe(0);

				bst.add(100);
				expect(bst.smaller()).toBe(0);

				bst.add(50);
				expect(bst.smaller()).toBe(0);

				bst.add(-50);
				expect(bst.smaller()).toBe(-50);

				bst.add(-51);
				expect(bst.smaller()).toBe(-51);

				bst.add(-49);
				expect(bst.smaller()).toBe(-51);

				bst.add(-100);
				expect(bst.smaller()).toBe(-100);

				bst.add(-88);
				expect(bst.smaller()).toBe(-100);
			});

			it("should add multiples mixed values and return the smaller from a given value", () => {
				const bst = new BinarySearchTree(100);

				bst.add(50);
				bst.add(200);

				bst.add(25);
				bst.add(75);
				bst.add(150);

				bst.add(13);
				bst.add(38);
				bst.add(66);
				bst.add(88);
				bst.add(125);
				bst.add(175);

				bst.add(7);
				bst.add(16);
				bst.add(33);
				bst.add(45);
				bst.add(57);
				bst.add(67);
				bst.add(80);
				bst.add(90);
				bst.add(166);
				bst.add(180);

				bst.add(40);
				bst.add(89);
				bst.add(95);
				bst.add(177);
				bst.add(185);

				bst.add(93);

				expect(bst.smaller()).toBe(7);
				expect(bst.smaller(7)).toBe(7);
				expect(bst.smaller(50)).toBe(7);
				expect(bst.smaller(38)).toBe(33);
				expect(bst.smaller(33)).toBe(33);
				expect(bst.smaller(75)).toBe(57);
				expect(bst.smaller(80)).toBe(80);
				expect(bst.smaller(90)).toBe(89);

				expect(bst.smaller(200)).toBe(125);
				expect(bst.smaller(175)).toBe(166);
				expect(bst.smaller(180)).toBe(177);

				expect(bst.smaller(-100)).toBe(undefined); // Value not exists in the tree
				expect(bst.smaller(55)).toBe(undefined); // Value not exists in the tree
				expect(bst.smaller(1000)).toBe(undefined); // Value not exists in the tree
			});
		});

		describe("larger()", () => {
			it("should return undefined if the tree is empty", () => {
				const bst = new BinarySearchTree();
				expect(bst.larger()).toBe(undefined);
			});

			it("should add multiples mixed values and return the larger (250): [100, 200, 55, 175, 250]", () => {
				const bst = new BinarySearchTree(100);
				expect(bst.larger()).toBe(100);

				bst.add(200);
				expect(bst.larger()).toBe(200);

				bst.add(55);
				expect(bst.larger()).toBe(200);

				bst.add(175);
				expect(bst.larger()).toBe(200);

				bst.add(250);
				expect(bst.larger()).toBe(250);
			});

			it("should add multiples mixed values and return the smaller from a given value", () => {
				const bst = new BinarySearchTree(100);

				bst.add(200);
				bst.add(55);

				bst.add(75);
				bst.add(175);
				bst.add(250);

				bst.add(66);
				bst.add(90);
				bst.add(180);

				bst.add(70);
				bst.add(80);
				bst.add(95);

				bst.add(85);
				bst.add(93);

				expect(bst.larger()).toBe(250);
				expect(bst.larger(100)).toBe(250);

				expect(bst.larger(55)).toBe(95);
				expect(bst.larger(75)).toBe(95);
				expect(bst.larger(90)).toBe(95);

				expect(bst.larger(66)).toBe(70);
				expect(bst.larger(70)).toBe(70);

				expect(bst.larger(80)).toBe(85);
				expect(bst.larger(85)).toBe(85);

				expect(bst.larger(200)).toBe(250);
				expect(bst.larger(175)).toBe(180);
				expect(bst.larger(180)).toBe(180);
			});
		});

		describe("search()", () => {
			it("should return undefined if the tree is empty", () => {
				const bst = new BinarySearchTree();
				expect(bst.search()).toBe(undefined);
			});

			it("should throw a error if the given value is not a number", () => {
				const bst = new BinarySearchTree(10);
				// expect(bst.search("10")).toThrowError("Value need to be a number!");
			});

			it("should return a error if the given value is not a number", () => {
				const bst = new BinarySearchTree(10);

				bst.add(5);
				bst.add(15);
				bst.add(20);

				expect(bst.search(10)).toBeInstanceOf(Node);
				expect(bst.search(5)).toBeInstanceOf(Node);
				expect(bst.search(15)).toBeInstanceOf(Node);
				expect(bst.search(20)).toBeInstanceOf(Node);

				expect(bst.search(10).value).toBe(10);
				expect(bst.search(5).value).toBe(5);
				expect(bst.search(15).value).toBe(15);
				expect(bst.search(20).value).toBe(20);
			});
		});

		describe("delete()", () => {
			it("should return false if node is not found", () => {
				const bst = new BinarySearchTree(100);
				bst.add(50);

				expect(bst.delete(0)).toBe(false);
			});

			it("should delete a given value with no children's", () => {
				const bst = new BinarySearchTree(100);

				// Left
				bst.add(50);
				expect(bst.root.left.value).toBe(50);

				bst.delete(50);
				expect(bst.root.left).toBe(null);

				// Right
				bst.add(150);
				expect(bst.root.right.value).toBe(150);

				bst.delete(150);
				expect(bst.root.right).toBe(null);
			});

			it("should delete a given value with a left child", () => {
				const bst = new BinarySearchTree(100);
				bst.add(50);
				expect(bst.root.left.value).toBe(50);

				bst.add(25);
				expect(bst.root.left.left.value).toBe(25);

				bst.delete(50);
				expect(bst.root.left.value).toBe(25);
				expect(bst.root.left.left).toBe(null);
			});

			it("should delete a given value with a right child", () => {
				const bst = new BinarySearchTree(100);
				bst.add(150);
				expect(bst.root.right.value).toBe(150);

				bst.add(175);
				expect(bst.root.right.right.value).toBe(175);

				bst.delete(150);
				expect(bst.root.right.value).toBe(175);
				expect(bst.root.right.right).toBe(null);
			});

			it("should delete a given value with a left and right child (add value to the left)", () => {
				const bst = new BinarySearchTree(100);
				bst.add(50);
				bst.add(25);
				bst.add(75);
				expect(bst.root.left.value).toBe(50);
				expect(bst.root.left.left.value).toBe(25);
				expect(bst.root.left.right.value).toBe(75);

				bst.delete(50);
				expect(bst.root.left.value).toBe(25);
				expect(bst.root.left.left).toBe(null);
				expect(bst.root.left.right.value).toBe(75);
			});

			it("should delete a given value with a left and right child (add value to the right)", () => {
				const bst = new BinarySearchTree(100);
				bst.add(150);
				bst.add(125);
				bst.add(175);
				expect(bst.root.right.value).toBe(150);
				expect(bst.root.right.left.value).toBe(125);
				expect(bst.root.right.right.value).toBe(175);

				bst.delete(150);
				expect(bst.root.right.value).toBe(125);
				expect(bst.root.right.left).toBe(null);
				expect(bst.root.right.right.value).toBe(175);
			});

			it("should delete multiple children's", () => {
				const bst = new BinarySearchTree(100);
				bst.add(50);
				bst.add(25);
				bst.add(75);
				expect(bst.root.left.value).toBe(50);
				expect(bst.root.left.left.value).toBe(25);
				expect(bst.root.left.right.value).toBe(75);

				bst.add(15);
				bst.add(30);
				expect(bst.root.left.left.left.value).toBe(15);
				expect(bst.root.left.left.right.value).toBe(30);

				bst.delete(50);
				expect(bst.root.left.value).toBe(30);
				expect(bst.root.left.left.value).toBe(25);
				expect(bst.root.left.right.value).toBe(75);

				expect(bst.root.left.left.left.value).toBe(15);
				expect(bst.root.left.left.right).toBe(null);

				bst.delete(30);
				expect(bst.root.left.value).toBe(25);
				// expect(bst.root.left.left).toBe(15);
				expect(bst.root.left.right.value).toBe(75);
			});
		});
	});
});
