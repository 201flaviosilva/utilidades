import { Maths } from "./src/main";
const { isDecimal } = Maths;

describe("Maths/isDecimal.js", () => {
	it("should return true", () => {
		expect(isDecimal(1.5)).toBe(true);
		expect(isDecimal(-2.5)).toBe(true);
		expect(isDecimal(0.0000001)).toBe(true);
	});

	it("should return false", () => {
		expect(isDecimal(1)).toBe(false);
		expect(isDecimal(0)).toBe(false);
		expect(isDecimal(-2)).toBe(false);
		expect(isDecimal(2.0)).toBe(false);
	});

	it("should throw an error", () => {
		expect(() => isDecimal("abc")).toThrow("Input must be a finite number");
		expect(() => isDecimal(NaN)).toThrow("Input must be a finite number");
		expect(() => isDecimal(Infinity)).toThrow("Input must be a finite number");
		expect(() => isDecimal(-Infinity)).toThrow("Input must be a finite number");
	});
});
