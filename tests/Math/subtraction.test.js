import { Maths } from "../../src/index.js";
const { subtraction } = Maths;

describe("Maths/subtraction.js", () => {
	it("returns the correct result for an array of numbers", () => {
		expect(subtraction(1, 2, -5, 2.4, -6.5, 0.5)).toBe(7.6);
		expect(subtraction(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).toBe(-43);
		expect(subtraction(-1, 2, 3, 4, 5, 6, 7, 8, -9)).toBe(-27);
		expect(subtraction(...[-1, 2, 3, 4, 5, 6, 7, 8, -9])).toBe(-27);
	});

	it("returns the correct result for single numbers", () => {
		expect(subtraction(1)).toBe(1);
		expect(subtraction(-5)).toBe(-5);
		expect(subtraction(0)).toBe(0);
	});

	it("returns 0 for an empty input", () => {
		expect(subtraction()).toBe(0);
	});

	it("should return NaN if a non-number element is provided", () => {
		expect(subtraction(1, 2, "a")).toBeNaN();
	});
});
