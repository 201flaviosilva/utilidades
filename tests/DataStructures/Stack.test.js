import { describe, expect, it } from "vitest";
import { DataStructures } from "./src/main";
const { Stack, StackNode: Node } = DataStructures;

describe("DataStructures/Stack.js", () => {
	describe("Stack", () => {
		describe("constructor()", () => {
			it("creates a new Stack, starting with a value", () => {
				const s = new Stack(100);

				expect(s.top).toBeInstanceOf(Node);
				expect(s.top.value).toBe(100);
				expect(s.top.next).toBeNull();
				expect(s.size).toBe(1);

				expect(s.toArray()).toEqual([100]);
				expect(s).toMatchSnapshot();
			});

			it("creates a new Stack, starting with an array", () => {
				const s = new Stack([10, 20, 30]);

				expect(s.top.value).toBe(30);
				expect(s.size).toBe(3);
				expect(s.toArray()).toEqual([30, 20, 10]);
				expect(s).toMatchSnapshot();
			});

			it("creates a new string Stack", () => {
				const s = new Stack(["A", "B", "C"]);

				expect(s.top.value).toBe("C");
				expect(s.toArray()).toEqual(["C", "B", "A"]);
			});

			it("creates a new empty Stack", () => {
				const s = new Stack();

				expect(s.top).toBeNull();
				expect(s.size).toBe(0);
				expect(s.toArray()).toEqual([]);
			});

			it("creates a new empty Stack, starting with an empty array", () => {
				const s = new Stack([]);

				expect(s.top).toBeNull();
				expect(s.size).toBe(0);
				expect(s.toArray()).toEqual([]);
			});
		});

		describe("push()", () => {
			it("adds a new value to the top of the stack", () => {
				const s = new Stack([10, 20, 30]);

				expect(s.push(40)).toEqual(s);
				expect(s.top.value).toBe(40);
				expect(s.size).toBe(4);

				expect(s.toArray()).toEqual([40, 30, 20, 10]);
			});

			it("should add a value to an empty stack", () => {
				const s = new Stack();

				s.push(10);
				expect(s.top.value).toBe(10);
				expect(s.size).toBe(1);

				expect(s.toArray()).toEqual([10]);
			});
		});

		describe("pop()", () => {
			it("removes the top value from the stack", () => {
				const s = new Stack([10, 20, 30]);

				expect(s.pop()).toBe(30);
				expect(s.top.value).toBe(20);
				expect(s.size).toBe(2);

				expect(s.toArray()).toEqual([20, 10]);
			});

			it("should remove the top value from a stack with only one value", () => {
				const s = new Stack([10]);

				expect(s.pop()).toBe(10);
				expect(s.top).toBeNull();
				expect(s.size).toBe(0);
				expect(s.toArray()).toEqual([]);
			});

			it("should return undefined if the stack is empty", () => {
				const s = new Stack();

				expect(s.pop()).toBeUndefined();
				expect(s.top).toBeNull();
				expect(s.size).toBe(0);
				expect(s.toArray()).toEqual([]);
			});

			it("should remove all the values from the stack", () => {
				const s = new Stack([10, 20, 30]);

				expect(s.pop()).toBe(30);
				expect(s.pop()).toBe(20);
				expect(s.pop()).toBe(10);

				expect(s.top).toBeNull();
				expect(s.size).toBe(0);
				expect(s.toArray()).toEqual([]);
			});
		});

		describe("clear()", () => {
			it("should clear the list", () => {
				const s = new Stack([10, 20, 30]);
				s.clear();
				expect(s.size).toBe(0);
				expect(s.top).toBeNull();
				expect(s.toArray()).toEqual([]);
			});

			it("should clear an empty stack", () => {
				const s = new Stack();
				s.clear();
				expect(s.size).toBe(0);
				expect(s.top).toBeNull();
				expect(s.toArray()).toEqual([]);
			});
		});

		describe("peek()", () => {
			it("should return the top value/node from the stack", () => {
				const s = new Stack([10, 20, 30]);
				expect(s.peek()).toBe(30);
				expect(s.peek(true).value).toBe(30);
				expect(s.peek(true)).toBeInstanceOf(Node);
			});

			it("should return undefined if the stack is empty", () => {
				const s = new Stack();
				expect(s.peek()).toBeUndefined();
			})
		})

		describe("isEmpty()", () => {
			it("should return true if the stack is empty", () => {
				const s = new Stack();
				expect(s.isEmpty()).toBe(true);
			});

			it("should return false if the stack is not empty", () => {
				const s = new Stack([10, 20, 30]);
				expect(s.isEmpty()).toBe(false);
			});
		});

		describe("toArray()", () => {
			it("should convert the stack to an array", () => {
				const s = new Stack([10, 20, 30]);
				expect(s.toArray()).toEqual([30, 20, 10]);
			});

			it("should convert an empty stack to an empty array", () => {
				const s = new Stack();
				expect(s.toArray()).toEqual([]);
			});
		});
	});

	describe("Node", () => {
		it("creates a new Node with a value", () => {
			const node = new Node(10);

			expect(node.value).toBe(10);
			expect(node.next).toBeNull();
			expect(node).toMatchSnapshot();
		});

		it("should return a error if the value is not provided", () => {
			expect(() => new Node()).toThrowError("Node value cannot be undefined.");
		});
	});
});
