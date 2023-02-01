import { Maths } from "../../src/index.js";
const { multiplication } = Maths;

describe("Maths/multiplication.js", () => {
	it("calculates a multiplication of all givens numbers", () => {
		expect(multiplication(1, 2)).toBe(2);
		expect(multiplication(1, 2, -5, 2.4, -6.5, 0.5)).toBe(78);
		expect(multiplication(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).toBe(0);
		expect(multiplication(-1, 2, 3, 4, 5, 6, 7, 8, -9)).toBe(362880);
		expect(multiplication(...[-1, 2, 3, 4, 5, 6, 7, 8, -9])).toBe(362880);
	});
});
