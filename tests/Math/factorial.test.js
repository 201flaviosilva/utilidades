import { Maths } from "../../src/index.js";
const { factorial } = Maths;

describe("Maths/factorial.js", () => {
	it("should return the factorial", () => {
		expect(factorial(0)).toBe(0);
		expect(factorial(1)).toBe(1);
		expect(factorial(1.2)).toBe(0.23999999999999994);
		expect(factorial(4)).toBe(24);
		expect(factorial(6)).toBe(720);
		expect(factorial(10)).toBe(3628800);
	});
});
