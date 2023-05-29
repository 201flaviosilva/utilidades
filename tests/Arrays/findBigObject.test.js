import { Arrays } from "./src/main";
const { findBigObject } = Arrays;

describe("Arrays/findBigObject.js", () => {
	describe("findBigObject", () => {
		const mockArray = [{ a: 1, b: 100 }, { a: 0, b: 50 }, { a: 0, b: 200 }];

		it("should return the object with the biggest given property value", () => {
			expect(findBigObject(mockArray, "b")).toEqual({ a: 0, b: 200 });
			expect(findBigObject(mockArray, "a")).toEqual({ a: 1, b: 100 });
		});

		it("should return only the value of the biggest given property value", () => {
			expect(findBigObject(mockArray, "b", true)).toBe(200);
			expect(findBigObject(mockArray, "a", true)).toBe(1);
		});
	});
});
