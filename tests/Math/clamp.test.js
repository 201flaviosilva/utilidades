import { Maths } from "./src/main";
const { clamp } = Maths;

describe("Maths/clamp.js", () => {
	it("should return the value between the limits", () => {
		expect(clamp(-10, 0, 100)).toBe(0);
		expect(clamp(0, 0, 100)).toBe(0);
		expect(clamp(50, 0, 100)).toBe(50);
		expect(clamp(100, 0, 100)).toBe(100);
		expect(clamp(200, 0, 100)).toBe(100);
	});
});
