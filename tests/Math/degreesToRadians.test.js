import { Maths } from "./src/main";
const { degreesToRadians } = Maths;

describe("Maths/degreesToRadians.js", () => {
	it("should return the value in radians", () => {
		expect(degreesToRadians(0)).toBe(0);
		expect(degreesToRadians(90)).toBe(1.5707963267948966);
		expect(degreesToRadians(500)).toBe(8.726646259971648);
	});
});
