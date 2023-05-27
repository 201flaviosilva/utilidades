import { Maths } from "./src/main";
const { isMultipleOf } = Maths;

describe("Maths/isMultipleOf.js", () => {
	it("should return false for 1 and 2", () => {
		expect(isMultipleOf(1, 2)).toBe(false);
	});

	it("should return true for 1 and 1", () => {
		expect(isMultipleOf(1, 1)).toBe(true);
	});

	it("should return true for 10 and 2", () => {
		expect(isMultipleOf(10, 2)).toBe(true);
	});

	it("should return true for 0 and 2", () => {
		expect(isMultipleOf(0, 2)).toBe(true);
	});

	it("should return false for 0 and 0", () => {
		expect(isMultipleOf(0, 0)).toBe(false);
	});

	it("should return false for 7 and 21", () => {
		expect(isMultipleOf(7, 21)).toBe(false);
	});

	it("should return false for 100 and 21", () => {
		expect(isMultipleOf(100, 21)).toBe(false);
	});

	it("should return true for 15 and 5", () => {
		expect(isMultipleOf(15, 5)).toBe(true);
	});

	it("should return false for 14 and 5", () => {
		expect(isMultipleOf(14, 5)).toBe(false);
	});
});
