import { compare2Objects } from "./src/main";

describe("compare2Objects.js", () => {
	it("should return true for equals value", () => {
		// Objects
		expect(compare2Objects({}, {})).toBe(true);
		expect(compare2Objects({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);

		// Arrays
		expect(compare2Objects([], [])).toBe(true);
		expect(compare2Objects([1, 2], [1, 2])).toBe(true);
		expect(compare2Objects(["A", "B", "c"], ["A", "B", "c"])).toBe(true);

		// Others
		expect(compare2Objects(0, 0)).toBe(true);
		expect(compare2Objects(1, 1)).toBe(true);
		expect(compare2Objects("", "")).toBe(true);
		expect(compare2Objects("A", "A")).toBe(true);
		expect(compare2Objects(true, true)).toBe(true);
		expect(compare2Objects(null, null)).toBe(true);
	});

	it("should return false for non equals value", () => {
		// Objects
		expect(compare2Objects({ a: 1 }, {})).toBe(false);
		expect(compare2Objects({ a: 1, b: 2 }, { a: 3, b: 2 })).toBe(false);

		// Arrays
		expect(compare2Objects([1, 2], [1])).toBe(false);
		expect(compare2Objects(["A", "B", "c"], ["A", "B", "C"])).toBe(false);

		// Others
		expect(compare2Objects(0, 1)).toBe(false);
		expect(compare2Objects("", "A")).toBe(false);
		expect(compare2Objects(true, false)).toBe(false);
		expect(compare2Objects(null, "")).toBe(false);
	});
});
