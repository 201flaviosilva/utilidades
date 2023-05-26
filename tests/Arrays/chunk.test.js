import { Arrays } from "../../src/index.js";
const { chunk } = Arrays;

describe("Arrays/chunk.js", () => {
	it("should split an array into smaller arrays of specified size", () => {
		const array = [1, 2, 3, 4, 5, 6];
		const expected = [[1, 2], [3, 4], [5, 6]];
		expect(chunk(array, 2)).toEqual(expected);
	});

	it("should split an array into smaller arrays of size 1 by default", () => {
		const array = ["a", "b", "c", "d"];
		const expected = [["a"], ["b"], ["c"], ["d"]];
		expect(chunk(array)).toEqual(expected);
	});

	it("should return an empty array if the input array is empty", () => {
		const array = [];
		const expected = [];
		expect(chunk(array, 3)).toEqual(expected);
	});
});
