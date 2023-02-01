import { Maths } from "../../src/index.js";
const { invertedLerp } = Maths;

describe("Maths/invertedLerp.js", () => {
	it("should return correct value when value is within the range", () => {
		const value = 5;
		const start = 0;
		const end = 10;
		const expectedResult = 0.5;

		expect(invertedLerp(value, start, end)).toEqual(expectedResult);
	});

	it("should return 0 when value is less than the start of the range", () => {
		const value = -10;
		const start = 0;
		const end = 10;
		const expectedResult = 0;

		expect(invertedLerp(value, start, end)).toEqual(expectedResult);
	});

	it("should return 1 when value is greater than the end of the range", () => {
		const value = 100;
		const start = 0;
		const end = 10;
		const expectedResult = 1;

		expect(invertedLerp(value, start, end)).toEqual(expectedResult);
	});
});
