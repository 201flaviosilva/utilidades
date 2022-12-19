import { Arrays } from "../../src/index.js";
const { allEqual } = Arrays;

describe("Arrays/allEqual.js", () => {
	it("should return true for all equal elements", () => {
		expect(allEqual([0, 0, 0, 0])).toBe(true);
		expect(allEqual([false, false])).toBe(true);
		expect(allEqual([[1, 1], [1, 1]])).toBe(true);
		expect(allEqual([{ a: "b", c: 1 }, { a: "b", c: 1 }])).toBe(true);
		expect(allEqual([{ a: "b", c: 1 }, { a: "b", c: 1 }, { a: "b", c: 1 }])).toBe(true);
	});

	it("should return false for non equal elements", () => {
		expect(allEqual([0, 0, 0, 1])).toBe(false);
		expect(allEqual([0, "a", "a"])).toBe(false);
		expect(allEqual([[1, 1], [1, 0]])).toBe(false);
		expect(allEqual([{ a: "b", c: 1 }, { a: "b" }])).toBe(false);
		expect(allEqual([{ a: "b", c: 1 }, { a: "b", c: 1 }, { a: "c", c: 1 }])).toBe(false);
	});
});
