import { Maths } from "../../src/index.js";
const { roundNumber } = Maths;

describe("Maths/roundNumber.js", () => {
	it("should round a number with more decimal places than the maxOfDecimals value", () => {
		expect(roundNumber(10.5555, 2)).toEqual(10.56);
		expect(roundNumber(10.5555, 1)).toEqual(10.6);
	});

	it("should not round a number with fewer decimal places than the maxOfDecimals value", () => {
		expect(roundNumber(10.5, 2)).toEqual(10.5);
		expect(roundNumber(10.5, 1)).toEqual(10.5);
	});

	it("should not round a whole number", () => {
		expect(roundNumber(10)).toEqual(10);
	});

	it("should throw a TypeError if num is not a number", () => {
		expect(() => roundNumber("not a number")).toThrow(TypeError);
	});

	it("should throw a TypeError if maxOfDecimals is not a number", () => {
		expect(() => roundNumber(10.5, "not a number")).toThrow(TypeError);
	});

	it("should throw a RangeError if maxOfDecimals is less than 0", () => {
		expect(() => roundNumber(10.5, -1)).toThrow(RangeError);
	});
});
