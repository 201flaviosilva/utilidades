import { Maths } from "../../src/index.js";
const { average } = Maths;

describe("Maths/average.js", () => {
	it("should return the average", () => {
		expect(average()).toBe(0);
		expect(average(...[0, 0, 0, 0])).toBe(0);
		expect(average(1)).toBe(1);
		expect(average(1, 2)).toBe(1.5);
		expect(average(5, 4, 3, 6, 7, 3, 1, 8)).toBe(4.625);
		expect(average(1, 2, -5, 2.4, -6.5, 0.5)).toBe(-0.9333333333333332);
		expect(average(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(5);
		expect(average(-1, 2, 3, 4, 5, 6, 7, 8, -9)).toBe(2.7777777777777777);
		expect(average(...[1, 2, 3, 4, 5, 6])).toBe(3.5);
	});
});
