import { clone } from "../src/index";

describe("clone.js", () => {
	it("should return a new object with the same properties", () => {
		expect(clone({})).toEqual({});

		const mockObject1 = { one: 1 };
		expect(clone(mockObject1)).not.toBe(mockObject1);
		expect(clone(mockObject1)).toEqual(mockObject1);

		const mockObject2 = { one: 1, arr: ["A", "B"] };
		expect(clone(mockObject2)).toEqual(mockObject2);
	});

	it("should return a new array with the same values", () => {
		expect(clone([])).toEqual([]);

		const mockArr1 = [1, 2];
		expect(clone(mockArr1)).not.toBe(mockArr1);
		expect(clone(mockArr1)).toContain(1);
		expect(clone(mockArr1)).toEqual(mockArr1);

		const mockArr2 = ["A", { one: 1 }, { b: 2 }];
		expect(clone(mockArr2)).toContain("A");
		expect(clone(mockArr2)).toEqual(mockArr2);
	});

	it("should return the same given value for non object args", () => {
		expect(clone(1)).toBe(1);
		expect(clone("B")).toBe("B");
		expect(clone(true)).toBe(true);
	});
});
