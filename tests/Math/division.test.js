import { Maths } from "../../src/index.js";
const { division } = Maths;

describe("Maths/division.js", () => {
	it("should return the division of all given numbers", () => {
		expect(division()).toBe(0);
		expect(division(1)).toBe(1);
		expect(division(1, 2)).toBe(0.5);
		expect(division(1000, 10)).toBe(100);
		expect(division(20, 10, 5)).toBe(0.4);
		expect(division(...[1, 2, -5, 2.4, -6.5, 0.5])).toBe(0.012820512820512822);
	});
});
