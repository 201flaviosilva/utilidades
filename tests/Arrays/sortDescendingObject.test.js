import { Arrays } from "../../src/index.js";
const { sortDescendingObject } = Arrays;

describe("Arrays/sortDescendingObject.js", () => {
	it("should sort the given array ascending (not mutate original)", () => {
		const mokeArray = [{ prop: 3 }, { prop: 1 }, { prop: 2 }];
		expect(sortDescendingObject(mokeArray, "prop")).toEqual([{ prop: 3 }, { prop: 2 }, { prop: 1 }]);
		expect(mokeArray).toEqual([{ prop: 3 }, { prop: 1 }, { prop: 2 }]);
	});

	it("should sort the given array ascending (mutate original)", () => {
		const mokeArray = [{ prop: 3 }, { prop: 1 }, { prop: 2 }];
		expect(sortDescendingObject(mokeArray, "prop", true)).toEqual([{ prop: 3 }, { prop: 2 }, { prop: 1 }]);
		expect(mokeArray).not.toEqual([{ prop: 3 }, { prop: 1 }, { prop: 2 }]);
	});
});
