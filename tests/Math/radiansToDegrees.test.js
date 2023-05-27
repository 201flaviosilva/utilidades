import { Maths } from "./src/main";
const { radiansToDegrees } = Maths;

describe("Maths/radiansToDegrees.js", () => {
	it("converts the given radian value to degrees", () => {
		expect(radiansToDegrees(1.58)).toBeCloseTo(90.52733163067008);
		expect(radiansToDegrees(2.5)).toBeCloseTo(143.2394487827058);
	});

	it("returns the correct result for other radian values", () => {
		expect(radiansToDegrees(0)).toBe(0);
		expect(radiansToDegrees(Math.PI / 4)).toBeCloseTo(45);
		expect(radiansToDegrees(Math.PI / 2)).toBeCloseTo(90);
	});
});
