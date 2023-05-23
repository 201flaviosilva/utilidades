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
