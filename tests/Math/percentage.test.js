import { Maths } from "../../src/index.js";
const { percentage } = Maths;

describe("Maths/percentage.js", () => {
	it("calculates the correct percentage for a positive value", () => {
		expect(percentage(10, 100)).toBe(10);
	});

	it("calculates the correct percentage for equal value and total", () => {
		expect(percentage(40, 40)).toBe(100);
	});

	it("calculates the correct percentage for value greater than total", () => {
		expect(percentage(40, 20)).toBe(200);
	});

	it("returns Infinity for zero total", () => {
		expect(percentage(10, 0)).toBe(Infinity);
	});
});
