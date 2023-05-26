import { Arrays } from "../../src/index.js";
const { removeDuplicatesObj } = Arrays;

describe("Arrays/removeDuplicatesObj.js", () => {
	it("should remove duplicate objects based on a specified property", () => {
		const array = [
			{ id: 1, name: "John" },
			{ id: 2, name: "Jane" },
			{ id: 3, name: "John" },
			{ id: 4, name: "Jane" },
			{ id: 5, name: "Jane" },
			{ id: 6, name: "Beep" },
		];
		const property = "name";
		const expected = [
			{ id: 1, name: "John" },
			{ id: 2, name: "Jane" },
			{ id: 6, name: "Beep" },
		];
		const result = removeDuplicatesObj(array, property);
		expect(result).toEqual(expected);
	});

	it("should return an empty array if the input array is empty", () => {
		const array = [];
		const property = "name";
		const expected = [];
		const result = removeDuplicatesObj(array, property);
		expect(result).toEqual(expected);
	});

	it("should return the same array if there are no duplicates", () => {
		const array = [
			{ id: 1, name: "John" },
			{ id: 2, name: "Jane" },
			{ id: 3, name: "Michael" },
		];
		const property = "name";
		const expected = [...array];
		const result = removeDuplicatesObj(array, property);
		expect(result).toEqual(expected);
	});
});
