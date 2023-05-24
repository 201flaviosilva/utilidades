import { Node } from "../../src/DataStructures/LinkedList.js";
import { DataStructures } from "../../src/index.js";
const { LinkedList } = DataStructures;

describe("LinkedList.js", () => {
	describe("LinkedList", () => {
		describe("constructor()", () => {
			it("creates a new LinkedList", () => {
				const ll = new LinkedList(100);

				expect(ll.head).toBeInstanceOf(Node);
				expect(ll.head.value).toBe(100);
				expect(ll.head.next).toBe(null);

				expect(ll.tail).toBeInstanceOf(Node);
				expect(ll.tail.value).toBe(100);
				expect(ll.tail.next).toBe(null);

				expect(ll.size).toBe(1);
			});

			it("creates a new empty LinkedList", () => {
				const ll = new LinkedList();
				expect(ll.size).toBe(0);
				expect(ll.head).toBe(null);
				expect(ll.tail).toBe(null);
			});
		});

		describe("clear()", () => {
			it("removes all elements from the linked list", () => {
				const ll = new LinkedList(100);
				expect(ll.size).toBe(1);

				ll.clear();

				expect(ll.head).toBe(null);
				expect(ll.tail).toBe(null);
				expect(ll.size).toBe(0);
			});
		});

		describe("get()", () => {
			it("should return value by the passed index", () => {
				const ll = new LinkedList(100);
				ll.push(20);
				ll.push(30);

				expect(ll.get(0)).toBe(100);
				expect(ll.get(1)).toBe(20);
				expect(ll.get(2)).toBe(30);
			});

			it("should return undefined in a empty list", () => {
				const ll = new LinkedList();
				expect(ll.get(0)).toBe(undefined);
				expect(ll.get(1)).toBe(undefined);
				expect(ll.get(10)).toBe(undefined);
			});

			it("should return undefined in a empty list", () => {
				const ll = new LinkedList();
				expect(ll.get(0)).toBe(undefined);
				expect(ll.get(1)).toBe(undefined);
				expect(ll.get(10)).toBe(undefined);
			});

			it("should return undefined if try to get a index less than 0 or greater than the list size", () => {
				const ll = new LinkedList();
				expect(ll.get(-1)).toBe(undefined);
				expect(ll.get(-10)).toBe(undefined);
			});

			it("should return undefined if try to get a index greater than the list size", () => {
				const ll = new LinkedList(10);
				expect(ll.get(0)).toBe(10);
				expect(ll.get(1)).toBe(undefined);
				expect(ll.get(2)).toBe(undefined);

				ll.push(25);
				expect(ll.get(1)).toBe(25);
				expect(ll.get(2)).toBe(undefined);
				expect(ll.get(10)).toBe(undefined);
			});
		});

		describe("set()", () => {
			it("should change a node value by the given index and new value", () => {
				const ll = new LinkedList(100);
				ll.push(20);
				ll.push(30);
				expect(ll.toArray()).toEqual([100, 20, 30]);

				expect(ll.set(0, 500)).toBe(true);
				expect(ll.toArray()).toEqual([500, 20, 30]);

				expect(ll.set(2, 0)).toBe(true);
				expect(ll.toArray()).toEqual([500, 20, 0]);

				expect(ll.set(1, -50)).toBe(true);
				expect(ll.toArray()).toEqual([500, -50, 0]);
			});

			it("should return false if the given index is out of bounds", () => {
				const ll = new LinkedList();
				expect(ll.toArray()).toEqual([]);

				expect(ll.set(0, 500)).toBe(false);
				expect(ll.toArray()).toEqual([]);

				ll.push(42);
				ll.set(0, 500);
				expect(ll.toArray()).toEqual([500]);

				expect(ll.set(-1, 1)).toBe(false);
				expect(ll.toArray()).toEqual([500]);

				expect(ll.set(100, 123)).toBe(false);
				expect(ll.toArray()).toEqual([500]);
			});
		});

		describe("unshift()", () => {
			it("should add a new element at the start", () => {
				const ll = new LinkedList(0);

				ll.unshift(10);
				expect(ll.size).toBe(2);
				expect(ll.head.value).toBe(10);
				expect(ll.tail.value).toBe(0);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([10, 0]);

				ll.unshift(20);
				expect(ll.size).toBe(3);
				expect(ll.head.value).toBe(20);
				expect(ll.tail.value).toBe(0);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([20, 10, 0]);
			});

			it("should add a new element if the list is empty", () => {
				const ll = new LinkedList();
				expect(ll.size).toBe(0);

				ll.unshift(1);
				expect(ll.size).toBe(1);
				expect(ll.head.value).toBe(1);
				expect(ll.tail.value).toBe(1);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([1]);

				ll.unshift(10);
				expect(ll.size).toBe(2);
				expect(ll.head.value).toBe(10);
				expect(ll.tail.value).toBe(1);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([10, 1]);
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
			it("adds a new item in the list", () => {
				const ll = new LinkedList(100);
				ll.push(50);
				ll.push(25);
				ll.push(42);
				ll.push(0);
				ll.push(123);
				expect(ll.toArray()).toEqual([100, 50, 25, 42, 0, 123]);

				ll.insert(2, 55);
				expect(ll.toArray()).toEqual([100, 50, 55, 25, 42, 0, 123]);

				ll.insert(5, 5);
				expect(ll.toArray()).toEqual([100, 50, 55, 25, 42, 5, 0, 123]);
			});

			it("should add a new item in the list at the start and a the end", () => {
				const ll = new LinkedList();
				ll.push(100);
				ll.insert(0, 0);
				ll.insert(2, 2);
				expect(ll.toArray()).toEqual([0, 100, 2]);
			});

			it("should not add items if the index is not valid", () => {
				const ll = new LinkedList(0);
				ll.push(100);
				ll.push(2);

				expect(ll.insert(-1)).toBe(false);
				expect(ll.insert(-10)).toBe(false);

				expect(ll.insert(4)).toBe(false);
				expect(ll.insert(10)).toBe(false);

				expect(ll.toArray()).toEqual([0, 100, 2]);
			});
		});

		describe("shift()", () => {
			it("remove the first element from the linked list", () => {
				const ll = new LinkedList(100);
				ll.push(50);
				ll.push(25);
				ll.push(13);

				expect(ll.shift()).toBe(100);
				expect(ll.size).toBe(3);
				expect(ll.head.value).toBe(50);
				expect(ll.tail.value).toBe(13);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([50, 25, 13]);

				expect(ll.shift()).toBe(50);
				expect(ll.size).toBe(2);
				expect(ll.head.value).toBe(25);
				expect(ll.tail.value).toBe(13);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([25, 13]);

				expect(ll.shift()).toBe(25);
				expect(ll.size).toBe(1);
				expect(ll.head.value).toBe(13);
				expect(ll.tail.value).toBe(13);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([13]);

				expect(ll.pop()).toBe(13);
				expect(ll.size).toBe(0);
				expect(ll.head).toBe(null);
				expect(ll.tail).toBe(null);
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
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([100, 50, 25]);

				expect(ll.pop()).toBe(25);
				expect(ll.size).toBe(2);
				expect(ll.head.value).toBe(100);
				expect(ll.tail.value).toBe(50);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([100, 50]);

				expect(ll.pop()).toBe(50);
				expect(ll.size).toBe(1);
				expect(ll.head.value).toBe(100);
				expect(ll.tail.value).toBe(100);
				expect(ll.tail.next).toBe(null);
				expect(ll.toArray()).toEqual([100]);

				expect(ll.pop()).toBe(100);
				expect(ll.size).toBe(0);
				expect(ll.head).toBe(null);
				expect(ll.tail).toBe(null);
				expect(ll.toArray()).toEqual([]);

				expect(ll.pop()).toBe(undefined);
				expect(ll.size).toBe(0);
				expect(ll.head).toBe(null);
				expect(ll.tail).toBe(null);
				expect(ll.toArray()).toEqual([]);
			});
		});

		describe("toArray()", () => {
			it("should return an array with the values of the linked list", () => {
				const ll = new LinkedList(0);
				ll.push(10);
				ll.push(20);
				ll.push(30);

				const result = ll.toArray();

				expect(Array.isArray(result)).toBe(true);
				expect(result).toEqual([0, 10, 20, 30]);
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
