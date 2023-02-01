import { Arrays } from "../../src/index.js";
const { sortAscending } = Arrays;

describe("Arrays/sortAscending.js", () => {
	it("should sort the given array ascending (not mutate original)", () => {
		const mokeArray = [3, 1, 2];
		expect(sortAscending(mokeArray)).toEqual([1, 2, 3]);
		expect(mokeArray).toEqual([3, 1, 2]);
	});

	it("should sort the given array ascending (mutate original)", () => {
		const mokeArray = [3, 1, 2];
		expect(sortAscending(mokeArray, true)).toEqual([1, 2, 3]);
		expect(mokeArray).not.toEqual([3, 1, 2]);
	});
});
