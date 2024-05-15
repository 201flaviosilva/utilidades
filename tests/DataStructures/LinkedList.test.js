import { describe, expect, it, test } from "vitest";
import { DataStructures } from "./src/main";
const { LinkedList, LLNode: Node } = DataStructures;

describe("DataStructures/LinkedList.js", () => {
	describe("LinkedList", () => {
		describe("constructor()", () => {
			it("creates a new LinkedList", () => {
				const ll = new LinkedList(100);

				expect(ll.head).toBeInstanceOf(Node);
				expect(ll.head.value).toBe(100);
				expect(ll.head.next).toBeNull();

				expect(ll.tail).toBeInstanceOf(Node);
				expect(ll.tail.value).toBe(100);
				expect(ll.tail.next).toBeNull();

				expect(ll.size).toBe(1);
			});

			it("creates a new empty LinkedList", () => {
				const ll = new LinkedList();
				expect(ll.size).toBe(0);
				expect(ll.head).toBeNull();
				expect(ll.tail).toBeNull();
			});
		});

		describe("clear()", () => {
			it("removes all elements from the linked list", () => {
				const ll = new LinkedList(100);
				expect(ll.size).toBe(1);

				ll.clear();

				expect(ll.head).toBeNull();
				expect(ll.tail).toBeNull();
				expect(ll.size).toBe(0);
			});
		});

		describe("get()", () => {
			it("should return value by the passed index", () => {
				const ll = new LinkedList([10, 20, 30]);

				expect(ll.get(0)).toBe(10);
				expect(ll.get(1)).toBe(20);
				expect(ll.get(2)).toBe(30);
			});

			it("should return undefined in a empty list", () => {
				const ll = new LinkedList();
				expect(ll.get(0)).toBeUndefined();
				expect(ll.get(1)).toBeUndefined();
				expect(ll.get(10)).toBeUndefined();
			});

			it("should return undefined if the index is out of bounds", () => {
				const ll = new LinkedList([10, 20, 30]);

				expect(ll.get(-1)).toBeUndefined();
				expect(ll.get(3)).toBeUndefined();
			});

			it("should return undefined if the list is empty", () => {
				const ll = new LinkedList();
				expect(ll.get(0)).toBeUndefined();
			});
		});

		describe("set()", () => {
			it("should change a node value by the given index and new value", () => {
				const ll = new LinkedList([10, 20, 30]);

				expect(ll.set(0, 100)).toBe(true);
				expect(ll.set(1, 200)).toBe(true);
				expect(ll.set(2, 300)).toBe(true);

				expect(ll.toArray()).toEqual([100, 200, 300]);
			});

			it("should return false if the given index is out of bounds", () => {
				const ll = new LinkedList([10, 20, 30]);
				expect(ll.set(3, 500)).toBe(false);
				expect(ll.set(-1, 500)).toBe(false);
			});

			it("should return false if the list is empty", () => {
				const ll = new LinkedList();
				expect(ll.set(0, 500)).toBe(false);
			});
		});

		describe("unshift()", () => {
			it("should add a new element at the start", () => {
				const ll = new LinkedList([10, 20, 30]);

				ll.unshift(5);
				expect(ll.size).toBe(4);
				expect(ll.head.value).toBe(5);
				expect(ll.head.next.value).toBe(10);
				expect(ll.tail.value).toBe(30);
				expect(ll.toArray()).toEqual([5, 10, 20, 30]);
			});

			it("should add a new element if the list is empty", () => {
				const ll = new LinkedList();

				ll.unshift(10);
				expect(ll.size).toBe(1);
				expect(ll.head.value).toBe(10);
				expect(ll.head.next).toBeNull();
				expect(ll.tail.value).toBe(10);

				expect(ll.toArray()).toEqual([10]);
			});

			it("should return the current list", () => {
				const ll = new LinkedList();

				expect(ll.unshift(10)).toBeInstanceOf(LinkedList);
			});
		});

		describe("push()", () => {
			it("adds items to the end of the linked list", () => {
				const ll = new LinkedList(100);

				expect(ll.push(50)).toBeInstanceOf(LinkedList);
				expect(ll.size).toBe(2);
				expect(ll.head.value).toBe(100);
				expect(ll.head.next.value).toBe(50);
				expect(ll.tail.value).toBe(50);

				ll.push(25);
				expect(ll.size).toBe(3);
				expect(ll.head.value).toBe(100);
				expect(ll.head.next.next.value).toBe(25);
				expect(ll.tail.value).toBe(25);

				expect(ll.toArray()).toEqual([100, 50, 25]);
			});
		});

		describe("insert()", () => {
			it("should insert a new value at the given index", () => {
				const ll = new LinkedList([10, 20, 30]);
				expect(ll.insert(1, 40)).toBeInstanceOf(LinkedList);

				expect(ll.size).toBe(4);
				expect(ll.toArray()).toEqual([10, 40, 20, 30]);
			});

			it("should insert a new value at the middle of the list", () => {
				const ll = new LinkedList([1, 3]);
				expect(ll.insert(1, 2)).toBeInstanceOf(LinkedList);

				expect(ll.get(1)).toBe(2);
			});

			it("should insert a new value at the start of the list", () => {
				const ll = new LinkedList([10, 20, 30]);
				ll.insert(0, 40);

				expect(ll.size).toBe(4);
				expect(ll.toArray()).toEqual([40, 10, 20, 30]);
			});

			it("should insert a new value at the end of the list", () => {
				const ll = new LinkedList([10, 20, 30]);
				ll.insert(3, 40);

				expect(ll.size).toBe(4);
				expect(ll.toArray()).toEqual([10, 20, 30, 40]);
			});

			it("should insert a new in a empty list", () => {
				const ll = new LinkedList();
				ll.insert(0, 10);

				expect(ll.size).toBe(1);
				expect(ll.toArray()).toEqual([10]);
			});

			it("should return false if the given index is out of bounds", () => {
				const ll = new LinkedList([10, 20, 30]);
				expect(ll.insert(4, 500)).toBe(false);
				expect(ll.insert(-1, 500)).toBe(false);
				expect(ll.size).toBe(3);
			});
		});

		describe("shift()", () => {
			it("remove the first element from the linked list", () => {
				const ll = new LinkedList([10, 20, 30]);

				expect(ll.shift()).toBe(10);
				expect(ll.size).toBe(2);
				expect(ll.head.value).toBe(20);
				expect(ll.head.next.value).toBe(30);
				expect(ll.tail.value).toBe(30);
				expect(ll.toArray()).toEqual([20, 30]);
			});

			it("should clear the list if it's the last node", () => {
				const ll = new LinkedList(10);

				expect(ll.shift()).toBe(10);
				expect(ll.size).toBe(0);
				expect(ll.head).toBeNull();
				expect(ll.tail).toBeNull();
				expect(ll.toArray()).toEqual([]);
			});

			it("should return undefined if the list is empty", () => {
				const ll = new LinkedList();
				expect(ll.shift()).toBeUndefined();
			});

			it("should remove all the values from the list", () => {
				const ll = new LinkedList([10, 20, 30]);

				expect(ll.shift()).toBe(10);
				expect(ll.shift()).toBe(20);
				expect(ll.shift()).toBe(30);

				expect(ll.size).toBe(0);
				expect(ll.head).toBeNull();
				expect(ll.tail).toBeNull();
				expect(ll.toArray()).toEqual([]);
			});
		});

		describe("pop()", () => {
			it("remove the last element from the linked list", () => {
				const ll = new LinkedList(100);
				ll.push(50);
				ll.push(25);
				ll.push(13);

				expect(ll.pop()).toBe(13);
				expect(ll.size).toBe(3);
				expect(ll.head.value).toBe(100);
				expect(ll.tail.value).toBe(25);
				expect(ll.tail.next).toBeNull();
				expect(ll.toArray()).toEqual([100, 50, 25]);

				expect(ll.pop()).toBe(25);
				expect(ll.size).toBe(2);
				expect(ll.head.value).toBe(100);
				expect(ll.tail.value).toBe(50);
				expect(ll.tail.next).toBeNull();
				expect(ll.toArray()).toEqual([100, 50]);

				expect(ll.pop()).toBe(50);
				expect(ll.size).toBe(1);
				expect(ll.head.value).toBe(100);
				expect(ll.tail.value).toBe(100);
				expect(ll.tail.next).toBeNull();
				expect(ll.toArray()).toEqual([100]);

				expect(ll.pop()).toBe(100);
				expect(ll.size).toBe(0);
				expect(ll.head).toBeNull();
				expect(ll.tail).toBeNull();
				expect(ll.toArray()).toEqual([]);

				expect(ll.pop()).toBeUndefined();
				expect(ll.size).toBe(0);
				expect(ll.head).toBeNull();
				expect(ll.tail).toBeNull();
				expect(ll.toArray()).toEqual([]);
			});
		});

		describe("remove()", () => {
			it("should remove the node at the given index", () => {
				const ll = new LinkedList([10, 20, 30, 40, 50]);

				expect(ll.remove(2)).toBe(30);
				expect(ll.size).toBe(4);
				expect(ll.toArray()).toEqual([10, 20, 40, 50]);
			});

			it("should remove the first node", () => {
				const ll = new LinkedList([10, 20, 30]);

				expect(ll.remove(0)).toBe(10);
				expect(ll.size).toBe(2);
				expect(ll.toArray()).toEqual([20, 30]);
			});

			it("should remove the last node", () => {
				const ll = new LinkedList([10, 20, 30]);

				expect(ll.remove(2)).toBe(30);
				expect(ll.size).toBe(2);
				expect(ll.toArray()).toEqual([10, 20]);
			});


			it("should clear the list if it's the last node", () => {
				const ll = new LinkedList(10);

				expect(ll.remove(0)).toBe(10);
				expect(ll.toArray()).toEqual([]);
				expect(ll.head).toBeNull();
				expect(ll.tail).toBeNull();
			});

			it("should return undefined if the index is out of bounds", () => {
				const ll = new LinkedList([10, 20, 30]);

				expect(ll.remove(4)).toBeUndefined();
				expect(ll.size).toBe(3);
				expect(ll.toArray()).toEqual([10, 20, 30]);
			});
		});

		describe("reverse()", () => {
			it("should reverse the list (5 elements)", () => {
				const ll = new LinkedList([0, 10, 20, 30, 40]);

				expect(ll.reverse()).toBeInstanceOf(LinkedList);

				expect(ll.head.value).toBe(40);
				expect(ll.tail.value).toBe(0);

				expect(ll.toArray()).toEqual([40, 30, 20, 10, 0]);
			});

			it("should reverse the list (2 elements)", () => {
				const ll = new LinkedList([10, 20]);

				ll.reverse();
				expect(ll.toArray()).toEqual([20, 10]);
			});

			test("does nothing on a list with only one element", () => {
				const ll = new LinkedList(0);
				ll.reverse();

				expect(ll.head.value).toBe(0);
				expect(ll.tail.value).toBe(0);

				expect(ll.toArray()).toEqual([0]);
			});

			test("does nothing if the list is empty", () => {
				const ll = new LinkedList();
				ll.reverse();

				expect(ll.head).toBeNull();
				expect(ll.tail).toBeNull();

				expect(ll.toArray()).toEqual([]);
			});

			it("should reverse twice the list", () => {
				const ll = new LinkedList([10, 20, 30]);

				ll.reverse();
				expect(ll.toArray()).toEqual([30, 20, 10]);

				ll.reverse();
				expect(ll.toArray()).toEqual([10, 20, 30]);
			});
		});

		describe("toArray()", () => {
			it("should return an array with the values of the linked list", () => {
				const ll = new LinkedList([0, 10, 20, 30]);
				expect(ll.toArray()).toEqual([0, 10, 20, 30]);
			});
		});

		describe("End To End tests", () => {
			test("all function of the linked list", () => {
				const ll = new LinkedList();
				expect(ll.toArray()).toEqual([]);

				ll.push(100);
				expect(ll.toArray()).toEqual([100]);

				ll.pop();
				expect(ll.toArray()).toEqual([]);

				ll.unshift(50);
				expect(ll.toArray()).toEqual([50]);

				ll.shift();
				expect(ll.toArray()).toEqual([]);
			});
		});
	});
});
