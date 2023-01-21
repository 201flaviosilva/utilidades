import { Arrays } from "../../src/index.js";
const { findLowObject } = Arrays;

describe("Arrays/findLowObject.js", () => {
	const mockArray = [{ a: 1, b: 100 }, { a: 10, b: 50 }, { a: 0, b: 200 }];

	it("should return the object with the biggest given property value", () => {
		expect(findLowObject(mockArray, "b")).toEqual({ a: 10, b: 50 });
		expect(findLowObject(mockArray, "a")).toEqual({ a: 0, b: 200 });
	});

	it("should return only the value of the biggest given property value", () => {
		expect(findLowObject(mockArray, "b", true)).toBe(50);
		expect(findLowObject(mockArray, "a", true)).toBe(0);
	});
});
