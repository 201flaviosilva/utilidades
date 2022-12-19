import { Arrays } from "../../src/index.js";
const { isSorted } = Arrays;

describe("Arrays/isSorted.js", () => {
	it("should return true for sorted arrays", () => {
		expect(isSorted([])).toEqual(true);
		expect(isSorted([0, 0, 0, 0])).toEqual(true);
		expect(isSorted([1, 2, 3])).toEqual(true);
		expect(isSorted(["A", "B", "C"])).toEqual(true);
	});

	it("should return false for unsorted arrays", () => {
		expect(isSorted([2, 1, 4])).toEqual(false);
		expect(isSorted([3, 2, 1])).toEqual(false);
		expect(isSorted(["B", "A", "D"])).toEqual(false);
	});
});
