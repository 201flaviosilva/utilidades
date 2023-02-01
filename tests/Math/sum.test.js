import { Maths } from "../../src/index.js";
const { sum } = Maths;

describe("Maths/sum.js", () => {
	it("should return 0 when no numbers are provided", () => {
		expect(sum()).toBe(0);
	});

	it("should return the sum of all given numbers", () => {
		expect(sum(1, 1)).toBe(2);
		expect(sum(1, 2, -5, 2.4, -6.5)).toBe(-6.1);
		expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).toBe(45);
		expect(sum(-1, 2, 3, 4, 5, 6, 7, 8, -9)).toBe(25);
		expect(sum(...[-1, 2, 3, 4, 5, 6, 7, 8, -9])).toBe(25);
	});
});
