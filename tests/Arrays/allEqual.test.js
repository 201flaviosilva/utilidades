import { Arrays } from "./src/main";
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

	test("should return true for array of all equal numbers", () => {
		const result = allEqual([0, 0, 0, 0]);
		expect(result).toBe(true);
	});
	test("should return false for array with different numbers", () => {
		const result = allEqual([0, 0, 0, 1]);
		expect(result).toBe(false);
	});
	test("should return false for array with different types", () => {
		const result = allEqual([0, "a", "a"]);
		expect(result).toBe(false);
	});
});
