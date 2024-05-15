import { describe, expect, it } from "vitest";
import { DataStructures } from "./src/main";
const { Queue, QueueNode: Node } = DataStructures;

describe("DataStructures/Queue.js", () => {
	describe("Queue", () => {
		describe("constructor()", () => {
			it("creates a new Queue, starting with a value", () => {
				const s = new Queue(100);

				expect(s.first).toBeInstanceOf(Node);
				expect(s.first.value).toBe(100);
				expect(s.first.next).toBeNull();

				expect(s.last).toBeInstanceOf(Node);
				expect(s.last.value).toBe(100);
				expect(s.last.next).toBeNull();

				expect(s.size).toBe(1);

				expect(s.toArray()).toEqual([100]);
				expect(s).toMatchSnapshot();
			});

			it("creates a new Queue, starting with an array", () => {
				const s = new Queue([10, 20, 30]);

				expect(s.first.value).toBe(10);
				expect(s.last.value).toBe(30);
				expect(s.size).toBe(3);
				expect(s.toArray()).toEqual([10, 20, 30]);
				expect(s).toMatchSnapshot();
			});

			it("creates a new string Queue", () => {
				const s = new Queue(["A", "B", "C"]);

				expect(s.first.value).toBe("A");
				expect(s.last.value).toBe("C");
				expect(s.toArray()).toEqual(["A", "B", "C"]);
			});

			it("creates a new empty Queue", () => {
				const s = new Queue();

				expect(s.first).toBeNull();
				expect(s.last).toBeNull();
				expect(s.size).toBe(0);

				expect(s.toArray()).toEqual([]);
			});

			it("creates a new empty Queue, starting with an empty array", () => {
				const s = new Queue([]);

				expect(s.first).toBeNull();
				expect(s.last).toBeNull();
				expect(s.size).toBe(0);

				expect(s.toArray()).toEqual([]);
			});
		});

		describe("enqueue()", () => {
			it("adds a new value to the end of the queue", () => {
				const s = new Queue([10, 20, 30]);

				expect(s.enqueue(40)).toEqual(s);
				expect(s.last.value).toBe(40);
				expect(s.size).toBe(4);

				expect(s.toArray()).toEqual([10, 20, 30, 40]);
			});

			it("should add a value to an empty queue", () => {
				const s = new Queue();

				expect(s.enqueue(10)).toEqual(s);

				expect(s.first.value).toBe(10);
				expect(s.last.value).toBe(10);
				expect(s.size).toBe(1);

				expect(s.toArray()).toEqual([10]);
			});
		});

		describe("dequeue()", () => {
			it("removes and returns the first value in the queue", () => {
				const s = new Queue([10, 20, 30]);

				expect(s.dequeue()).toBe(10);
				expect(s.size).toBe(2);

				expect(s.toArray()).toEqual([20, 30]);
			});

			it("should return the first node in the queue", () => {
				const s = new Queue([10, 20, 30]);

				expect(s.dequeue(true)).toBeInstanceOf(Node);

				expect(s.toArray()).toEqual([20, 30]);
			});

			it("should remove the first value from a stack with only one value", () => {
				const s = new Queue(10);

				expect(s.dequeue()).toBe(10);
				expect(s.first).toBeNull();
				expect(s.last).toBeNull();
				expect(s.size).toBe(0);
				expect(s.toArray()).toEqual([]);
			});

			it("should return undefined if the queue is empty", () => {
				const s = new Queue();

				expect(s.dequeue()).toBeUndefined();
			});

			it("should remove all the values from the queue", () => {
				const s = new Queue([10, 20, 30]);

				expect(s.dequeue()).toBe(10);
				expect(s.dequeue()).toBe(20);
				expect(s.dequeue()).toBe(30);

				expect(s.first).toBeNull();
				expect(s.last).toBeNull();
				expect(s.size).toBe(0);
				expect(s.toArray()).toEqual([]);
			});
		});

		describe("clear()", () => {
			it("should clear the list", () => {
				const s = new Queue([10, 20, 30]);
				s.clear();
				expect(s.size).toBe(0);
				expect(s.first).toBeNull();
				expect(s.last).toBeNull();
				expect(s.toArray()).toEqual([]);
			});

			it("should clear an empty queue", () => {
				const s = new Queue();
				s.clear();
				expect(s.size).toBe(0);
				expect(s.first).toBeNull();
				expect(s.last).toBeNull();
				expect(s.toArray()).toEqual([]);
			});
		});

		describe("peek()", () => {
			it("should return the top value/node from the queue", () => {
				const s = new Queue([10, 20, 30]);
				expect(s.peek()).toBe(10);
				expect(s.peek(true).value).toBe(10);
				expect(s.peek(true)).toBeInstanceOf(Node);
			});

			it("should return undefined if the queue is empty", () => {
				const s = new Queue();
				expect(s.peek()).toBeUndefined();
			});
		});

		describe("isEmpty()", () => {
			it("should return true if the Queue is empty", () => {
				const s = new Queue();
				expect(s.isEmpty()).toBe(true);
			});

			it("should return false if the Queue is not empty", () => {
				const s = new Queue([10, 20, 30]);
				expect(s.isEmpty()).toBe(false);
			});
		});

		describe("toArray()", () => {
			it("should convert the Queue to an array", () => {
				const s = new Queue([10, 20, 30]);
				expect(s.toArray()).toEqual([10, 20, 30]);
			});

			it("should convert an empty Queue to an empty array", () => {
				const s = new Queue();
				expect(s.toArray()).toEqual([]);
			});
		})
	});

	describe("Node", () => {
		it("creates a new Node with a value", () => {
			const node = new Node(10);

			expect(node.value).toBe(10);
			expect(node.next).toBeNull();
			expect(node).toMatchSnapshot();
		});
	});
});
