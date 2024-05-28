import { Arrays } from "./src/main";
const { isItemInCommon } = Arrays;

describe("Arrays/isItemInCommon.js", () => {
	it("should return true for items in common", () => {
		expect(isItemInCommon([1, 2, 3], [2, 3, 4])).toEqual(true);
		expect(isItemInCommon(["A", "B", "C"], ["B", "C", "D"])).toEqual(true);
		expect(isItemInCommon([0], [0])).toEqual(true);
		expect(isItemInCommon([0], [1, 2, 3, 0, 4])).toEqual(true);
	});

	it("should return false for items not in common", () => {
		expect(isItemInCommon([1, 2, 3], [4, 5, 6])).toEqual(false);
		expect(isItemInCommon(["A", "B", "C"], ["D", "E", "F"])).toEqual(false);
		expect(isItemInCommon([0], [1])).toEqual(false);
		expect(isItemInCommon([], [])).toEqual(false);
	});
});
