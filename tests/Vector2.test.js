import { Vector2 } from "../src/index";

describe("Vector2.js", () => {
	describe("constructor()", () => {
		it("should create a new Vector2 with the given parameters", () => {
			// Not passing any value
			const v0 = new Vector2();
			expect(v0.x).toBe(0);
			expect(v0.y).toBe(0);

			// Just passing the x value
			const v1 = new Vector2(5);
			expect(v1.x).toBe(5);
			expect(v1.y).toBe(5);

			// Passing the x, and y value
			const v2 = new Vector2(5, 10);
			expect(v2.x).toBe(5);
			expect(v2.y).toBe(10);

			// Passing the values as object
			const v3 = new Vector2({ x: -11, y: 100 });
			expect(v3.x).toBe(-11);
			expect(v3.y).toBe(100);

			// Passing the values as empty object
			const v4 = new Vector2({ x: null, y: null });
			expect(v4.x).toBe(0);
			expect(v4.y).toBe(0);
		});
	});

	describe("set()", () => {
		it("should change the vector x and y to the given values", () => {
			// Not passing any value
			const v = new Vector2(1, 2);
			v.set();
			expect(v.x).toBe(0);
			expect(v.y).toBe(0);

			// Just passing the x value
			v.set(5);
			expect(v.x).toBe(5);
			expect(v.y).toBe(5);

			// Passing the x, and y value
			v.set(5, 10);
			expect(v.x).toBe(5);
			expect(v.y).toBe(10);

			// Passing the values as object
			v.set({ x: -11, y: 100, });
			expect(v.x).toBe(-11);
			expect(v.y).toBe(100);

			// Passing the values as empty object
			v.set({ x: null, y: null });
			expect(v.x).toBe(0);
			expect(v.y).toBe(0);

			expect(v.set()).toEqual(v);
		});
	});

	describe("clone()", () => {
		it("should return a new array with the same values as the original", () => {
			const v = new Vector2(1, 2);
			expect(v.clone()).toEqual(v);
		});
	});

	describe("add()", () => {
		it("should add the given values to the current properties", () => {
			const v = new Vector2(1, 2);
			v.add(new Vector2(10));

			expect(v.x).toEqual(11);
			expect(v.y).toEqual(12);
		});
	});

	describe("subtract()", () => {
		it("should subtract the given values to the current properties", () => {
			const v = new Vector2(1, 2);
			v.subtract(new Vector2(10));

			expect(v.x).toEqual(-9);
			expect(v.y).toEqual(-8);
		});
	});

	describe("scale()", () => {
		it("should multiply the given value to the current properties", () => {
			const v = new Vector2(1, 2);
			v.scale(10);

			expect(v.x).toEqual(10);
			expect(v.y).toEqual(20);
		});
	});

	describe("multiply()", () => {
		it("should multiply the given values to the current properties", () => {
			const v = new Vector2(1, 2);
			v.multiply(new Vector2(10, 2));

			expect(v.x).toEqual(10);
			expect(v.y).toEqual(4);
		});
	});

	describe("divide()", () => {
		it("should divide the given values to the current properties", () => {
			const v = new Vector2(1, 2);
			v.divide(new Vector2(2));

			expect(v.x).toEqual(0.5);
			expect(v.y).toEqual(1);
		});
	});

	describe("dot()", () => {
		it("should return the product of the 2 given vectors", () => {
			const v = new Vector2(10, 5);
			expect(v.dot(new Vector2(5))).toEqual(75);
		});
	});
});
