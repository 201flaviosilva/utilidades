import { Maths } from "./src/main";
const { negative } = Maths;

describe("Maths/negative.js", () => {
	it("should return the negative number", () => {
		expect(negative(10)).toBe(-10);
	});

	it("should return 0 if the number is 0", () => {
		expect(negative(0)).toBe(0);
	});

	it("should return the same number if the number is already negative", () => {
		expect(negative(-5)).toBe(-5);
	});
});
