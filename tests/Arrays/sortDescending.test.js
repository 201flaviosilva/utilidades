import { Arrays } from "./src/main";
const { sortDescending } = Arrays;

describe("Arrays/sortDescending.js", () => {
	it("should sort the given array ascending (not mutate original)", () => {
		const mokeArray = [3, 1, 2];
		expect(sortDescending(mokeArray)).toEqual([3, 2, 1]);
		expect(mokeArray).toEqual([3, 1, 2]);
	});

	it("should sort the given array ascending (mutate original)", () => {
		const mokeArray = [3, 1, 2];
		expect(sortDescending(mokeArray, true)).toEqual([3, 2, 1]);
		expect(mokeArray).not.toEqual([3, 1, 2]);
	});
});
