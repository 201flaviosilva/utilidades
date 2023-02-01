import { Maths } from "../../src/index.js";
const { median } = Maths;

describe("Maths/median.js", () => {
	it("median if no numbers", () => {
		expect(median()).toBe(0);
	});

	it("median of 1 number", () => {
		expect(median(1)).toBe(1);
	});

	it("median of 2 numbers", () => {
		expect(median(1, 2)).toBe(1.5);
	});

	it("median of even number of numbers", () => {
		expect(median(1, 2, 3, 4)).toBe(2.5);
	});

	it("median of odd number of numbers", () => {
		expect(median(1, 2, 3, 4, 5)).toBe(3);
	});

	it("median of numbers in an array", () => {
		expect(median(...[1, 2, 3, 4])).toBe(2.5);
	});
});
