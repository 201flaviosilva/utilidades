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
	});
});
