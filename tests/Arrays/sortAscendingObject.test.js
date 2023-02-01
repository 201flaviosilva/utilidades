import { Arrays } from "../../src/index.js";
const { sortAscendingObject } = Arrays;

describe("Arrays/sortAscendingObject.js", () => {
	it("should sort the given array ascending (not mutate original)", () => {
		const mokeArray = [{ prop: 3 }, { prop: 1 }, { prop: 2 }];
		expect(sortAscendingObject(mokeArray, "prop")).toEqual([{ prop: 1 }, { prop: 2 }, { prop: 3 }]);
		expect(mokeArray).toEqual([{ prop: 3 }, { prop: 1 }, { prop: 2 }]);
	});

	it("should sort the given array ascending (mutate original)", () => {
		const mokeArray = [{ prop: 3 }, { prop: 1 }, { prop: 2 }];
		expect(sortAscendingObject(mokeArray, "prop", true)).toEqual([{ prop: 1 }, { prop: 2 }, { prop: 3 }]);
		expect(mokeArray).not.toEqual([{ prop: 3 }, { prop: 1 }, { prop: 2 }]);
	});
});
