import { expect, it } from "vitest";
import { DataStructures } from "./src/main";
const { DoublyLinkedList, DLLNode: Node } = DataStructures;

describe("DataStructures/DoublyLinkedList.js", () => {
	describe("DoublyLinkedList", () => {
		describe("constructor()", () => {
			it("creates a new DoublyLinkedList, starting with a value", () => {
				const dll = new DoublyLinkedList(100);

				expect(dll.head).toBeInstanceOf(Node);
				expect(dll.head.value).toBe(100);
				expect(dll.head.next).toBeNull();
				expect(dll.head.prev).toBeNull();

				expect(dll.tail).toBeInstanceOf(Node);
				expect(dll.tail.value).toBe(100);
				expect(dll.tail.next).toBeNull();
				expect(dll.tail.prev).toBeNull();

				expect(dll.size).toBe(1);
				expect(dll.toArray()).toEqual([100]);
				expect(dll).toMatchSnapshot();
			});

			it("creates a new DoublyLinkedList, starting with an array", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.head.value).toBe(10);
				expect(dll.tail.value).toBe(30);

				expect(dll.size).toBe(3);
				expect(dll.toArray()).toEqual([10, 20, 30]);
				expect(dll).toMatchSnapshot();
			});

			it("creates a new string DoublyLinkedList", () => {
				const dll = new DoublyLinkedList(["A", "B", "C"]);

				expect(dll.head.value).toBe("A");
				expect(dll.tail.value).toBe("C");

				expect(dll.size).toBe(3);
				expect(dll.toArray()).toEqual(["A", "B", "C"]);
			});

			it("creates a new empty DoublyLinkedList", () => {
				const dll = new DoublyLinkedList();
				expect(dll.size).toBe(0);
				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
				expect(dll.toArray()).toEqual([]);
				expect(dll).toMatchSnapshot();
			});

			it("creates a new empty DoublyLinkedList, starting with an empty array", () => {
				const dll = new DoublyLinkedList([]);
				expect(dll.size).toBe(0);
				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
				expect(dll.toArray()).toEqual([]);
				expect(dll).toMatchSnapshot();
			});
		});

		describe("clear()", () => {
			it("should clear the list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				dll.clear();
				expect(dll.size).toBe(0);
				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
				expect(dll.toArray()).toEqual([]);
			});

			it("should clear an empty list", () => {
				const dll = new DoublyLinkedList();
				dll.clear();
				expect(dll.size).toBe(0);
				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
				expect(dll.toArray()).toEqual([]);
			});
		});

		describe("get()", () => {
			it("should returns the value of the node at the given index", () => {
				const dll = new DoublyLinkedList([10, 20, 30, 40, 50]);
				expect(dll.get(0)).toBe(10);
				expect(dll.get(1)).toBe(20);
				expect(dll.get(2)).toBe(30);
				expect(dll.get(3)).toBe(40);
				expect(dll.get(4)).toBe(50);
			});

			it("should returns the node at the given index", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				const node = dll.get(1, true);

				expect(node.value).toBe(20);
				expect(node.prev.value).toBe(10);
				expect(node.next.value).toBe(30);
				expect(node).toBeInstanceOf(Node);
			});

			it("should return undefined if the index is out of bounds", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				expect(dll.get(3)).toBeUndefined();
				expect(dll.get(-1)).toBeUndefined();
			});

			it("should return undefined if the list is empty", () => {
				const dll = new DoublyLinkedList();
				expect(dll.get(0)).toBeUndefined();
			});
		});

		describe("set()", () => {
			it("should change a node value by the given index and new value", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				expect(dll.set(0, 100)).toBe(true);
				expect(dll.set(1, 200)).toBe(true);
				expect(dll.set(2, 300)).toBe(true);

				expect(dll.toArray()).toEqual([100, 200, 300]);
				expect(dll).toMatchSnapshot();
			});

			it("should return false if the given index is out of bounds", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				expect(dll.set(3, 500)).toBe(false);
				expect(dll.set(-1, 500)).toBe(false);
			});

			it("should return false if the list is empty", () => {
				const dll = new DoublyLinkedList();
				expect(dll.set(0, 500)).toBe(false);
			});
		});

		describe("unshift()", () => {
			it("adds a new value to the start of the list", () => {
				const dll = new DoublyLinkedList([20, 30]);
				expect(dll.size).toBe(2);

				dll.unshift(10);

				expect(dll.head.value).toBe(10);
				expect(dll.head.next.value).toBe(20);
				expect(dll.head.prev).toBeNull();
				expect(dll.tail.value).toBe(30);

				expect(dll.size).toBe(3);
				expect(dll.toArray()).toEqual([10, 20, 30]);
				expect(dll).toMatchSnapshot();
			});

			it("should add a new value to the start of an empty list", () => {
				const dll = new DoublyLinkedList();
				expect(dll.size).toBe(0);

				dll.unshift(10);

				expect(dll.head.value).toBe(10);
				expect(dll.head.next).toBeNull();
				expect(dll.head.prev).toBeNull();

				expect(dll.size).toBe(1);
				expect(dll.toArray()).toEqual([10]);
				expect(dll).toMatchSnapshot();
			});
		});

		describe("push()", () => {
			it("should add a new value to the end of list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.push(40)).toBeTruthy();
				expect(dll.tail.value).toBe(40);
				expect(dll.toArray()).toEqual([10, 20, 30, 40]);
			});

			it("should add a new value to the end of an empty list", () => {
				const dll = new DoublyLinkedList();

				expect(dll.push(40)).toBeTruthy();
				expect(dll.head.value).toBe(40);
				expect(dll.tail.value).toBe(40);
				expect(dll.toArray()).toEqual([40]);
			});
		});

		describe("insert()", () => {
			it("should insert a new value at the given index", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				expect(dll.insert(1, 40)).toBeInstanceOf(DoublyLinkedList);

				expect(dll.size).toBe(4);
				expect(dll.toArray()).toEqual([10, 40, 20, 30]);
			});

			it("should insert a new value at the start of the list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				dll.insert(0, 40);

				expect(dll.size).toBe(4);
				expect(dll.toArray()).toEqual([40, 10, 20, 30]);
			});

			it("should insert a new value at the end of the list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				dll.insert(3, 40);

				expect(dll.size).toBe(4);
				expect(dll.toArray()).toEqual([10, 20, 30, 40]);
			});

			it("should insert a new in a empty list", () => {
				const dll = new DoublyLinkedList();
				dll.insert(0, 10);

				expect(dll.size).toBe(1);
				expect(dll.toArray()).toEqual([10]);
			});

			it("should return false if the given index is out of bounds", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				expect(dll.insert(4, 500)).toBe(false);
				expect(dll.insert(-1, 500)).toBe(false);
				expect(dll.size).toBe(3);
			});
		});

		describe("shift()", () => {
			it("should remove the first value from the list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.shift()).toBe(10);
				expect(dll.head.value).toEqual(20);
				expect(dll.head.prev).toBeNull();
				expect(dll.head.next.value).toEqual(30);
				expect(dll.tail.value).toEqual(30);

				expect(dll.size).toBe(2);
				expect(dll.toArray()).toEqual([20, 30]);
				expect(dll).toMatchSnapshot();
			});

			it("should clear the list if it's the last node", () => {
				const dll = new DoublyLinkedList(10);

				expect(dll.shift()).toBe(10);
				expect(dll.toArray()).toEqual([]);
				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
			});

			it("should return undefined if the list is empty", () => {
				const dll = new DoublyLinkedList();
				expect(dll.shift()).toBeUndefined();
				expect(dll.toArray()).toEqual([]);
			});

			it("should remove all the values from the list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.shift()).toBe(10);
				expect(dll.shift()).toBe(20);
				expect(dll.shift()).toBe(30);

				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
				expect(dll.size).toBe(0);
				expect(dll.toArray()).toEqual([]);
				expect(dll).toMatchSnapshot();
			});
		});

		describe("pop()", () => {
			it("should remove the last value from the list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.pop()).toBe(30);
				expect(dll.tail.value).toEqual(20);
				expect(dll.tail.next).toBeNull();
				expect(dll.tail.prev.value).toEqual(10);

				expect(dll.size).toBe(2);
				expect(dll.toArray()).toEqual([10, 20]);
				expect(dll).toMatchSnapshot();
			});

			it("should clear the list if it's the last node", () => {
				const dll = new DoublyLinkedList(10);

				expect(dll.pop()).toBe(10);
				expect(dll.toArray()).toEqual([]);
				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
			});

			it("should return undefined if the list is empty", () => {
				const dll = new DoublyLinkedList();
				expect(dll.pop()).toBeUndefined();
				expect(dll.toArray()).toEqual([]);
			});

			it("should remove all the values from the list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.pop()).toBe(30);
				expect(dll.pop()).toBe(20);
				expect(dll.pop()).toBe(10);

				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
				expect(dll.size).toBe(0);
				expect(dll.toArray()).toEqual([]);
				expect(dll).toMatchSnapshot();
			});
		});

		describe("remove()", () => {
			it("should remove the node at the given index", () => {
				const dll = new DoublyLinkedList([10, 20, 30, 40, 50]);

				expect(dll.remove(2)).toBe(30);
				expect(dll.size).toBe(4);
				expect(dll.toArray()).toEqual([10, 20, 40, 50]);
				expect(dll).toMatchSnapshot();
			});

			it("should remove the first node if the index is 0", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.remove(0)).toBe(10);
				expect(dll.size).toBe(2);
				expect(dll.toArray()).toEqual([20, 30]);
			});

			it("should remove the last node if the index is the length of the list", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.remove(2)).toBe(30);
				expect(dll.size).toBe(2);
				expect(dll.toArray()).toEqual([10, 20]);
			});


			it("should clear the list if it's the last node", () => {
				const dll = new DoublyLinkedList(10);

				expect(dll.remove(0)).toBe(10);
				expect(dll.toArray()).toEqual([]);
				expect(dll.head).toBeNull();
				expect(dll.tail).toBeNull();
			});

			it("should return undefined if the index is out of bounds", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);

				expect(dll.remove(3)).toBe(false);
				expect(dll.size).toBe(3);
				expect(dll.toArray()).toEqual([10, 20, 30]);
			});
		});

		describe("toArray()", () => {
			it("should convert the list to an array", () => {
				const dll = new DoublyLinkedList([10, 20, 30]);
				expect(dll.toArray()).toEqual([10, 20, 30]);
			});

			it("should return an empty array if the list is empty", () => {
				const dll = new DoublyLinkedList();
				expect(dll.toArray()).toEqual([]);
			});
		});
	});

	describe("Node", () => {
		it("creates a new Node with a value", () => {
			const node = new Node(10);

			expect(node.value).toBe(10);
			expect(node.next).toBeNull();
			expect(node.prev).toBeNull();
			expect(node).toMatchSnapshot();
		});

		it("should return a error if the value is not provided", () => {
			expect(() => new Node()).toThrowError("Node value cannot be undefined.");
		});
	});
});
