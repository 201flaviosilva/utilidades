import { Maths } from "../../src/index.js";
const { isEven, isOdd } = Maths;

describe("Maths/isEvenOdd.js", () => {
	describe("isEven", () => {
		it("returns true for even numbers", () => {
			expect(isEven(2)).toBe(true);
		});
		it("returns false for odd numbers", () => {
			expect(isEven(1)).toBe(false);
		});
	});

	describe("isOdd", () => {
		it("returns true for odd numbers", () => {
			expect(isOdd(1)).toBe(true);
		});
		it("returns false for even numbers", () => {
			expect(isOdd(2)).toBe(false);
		});
	});

});
