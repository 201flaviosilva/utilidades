import { Maths } from "./src/main";
const { lerp } = Maths;

describe("Maths/lerp.js", () => {
	it("returns correct value for 0 as value parameter", () => {
		expect(lerp(0, 0, 100)).toBe(0);
	});

	it("returns correct value for 0.5 as value parameter", () => {
		expect(lerp(0.5, 0, 100)).toBe(50);
	});

	it("returns correct value for 1 as value parameter", () => {
		expect(lerp(1, 0, 100)).toBe(100);
	});
});
