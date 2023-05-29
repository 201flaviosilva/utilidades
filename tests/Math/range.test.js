import { Maths } from "./src/main";
const { range } = Maths;

describe("Maths/range.js", () => {
	it("should return an array of numbers between the given start and end values with the given step", () => {
		expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
		expect(range(0, 100, 10)).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
		expect(range(0, 100, 100)).toEqual([0, 100]);
		expect(range(1, 100, 100)).toEqual([1]);
	});

	it("should return an array of numbers between the given start and end values, skipping the given range of numbers", () => {
		expect(range(0, 10, 1, [{ start: 2, end: 8 }])).toEqual([0, 1, 9, 10]);
		expect(range(0, 10, 1, [{ start: 2, end: 4 }, { start: 7, end: 8 }])).toEqual([0, 1, 5, 6, 9, 10]);
	});
});
