import { and, or, xor } from "../src/index";

describe("logicalOperators.js", () => {
	describe("and", () => {
		it("should return true for all true values", () => {
			expect(and(true)).toBe(true);
			expect(and(true, true, true, true, true, true)).toBe(true);
			expect(and({}, [], true, 1, "B")).toBe(true);
		});

		it("should return false if any of the values are falsy", () => {
			expect(and(false)).toBe(false);
			expect(and(true, true, false, true, true, true)).toBe(false);
			expect(and({}, [], false, 1, " ")).toBe(false);
			expect(and({}, "")).toBe(false);
			expect(and(1, false, "Beep")).toBe(false);
			expect(and(0, 1, 2)).toBe(false);
		});
	});

	describe("or", () => {
		it("should return true if any of the value its true", () => {
			expect(or(true)).toBe(true);
			expect(or(true, true)).toBe(true);
			expect(or(false, true, false)).toBe(true);
			expect(or(false, 0, "", {})).toBe(true);
		});

		it("should return false if all of the values are false", () => {
			expect(or(false)).toBe(false);
			expect(or(false, null, 0, "")).toBe(false);
		});
	});

	describe("xor", () => {
		it("should return true if any of the value its true", () => {
			expect(xor(true, false)).toBe(true);
			expect(xor(false, true)).toBe(true);
			expect(xor(0, {})).toBe(true);
		});

		it("should return false if both are falsy ou truthy", () => {
			expect(xor(false, false)).toBe(false);
			expect(xor(false, false)).toBe(false);
			expect(xor(0, null)).toBe(false);
		});
	});
});
