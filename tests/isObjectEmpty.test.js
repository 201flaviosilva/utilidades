import { isObjectEmpty } from "./src/main";

describe("isObjectEmpty.js", () => {
	it("should return true for the empties object", () => {
		expect(isObjectEmpty([])).toBe(true);
		expect(isObjectEmpty({})).toBe(true);
	});

	it("should return false for the non empties object", () => {
		expect(isObjectEmpty([1, 2])).toBe(false);
		expect(isObjectEmpty({ beep: "Boop" })).toBe(false);
	});
});
