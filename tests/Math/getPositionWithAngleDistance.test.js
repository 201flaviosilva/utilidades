import { Maths } from "../../src/index.js";
const { getPositionWithAngleDistance } = Maths;

describe("Maths/getPositionWithAngleDistance.js", () => {
	it("should return a position based in the given angle, distance, and origin", () => {
		expect(getPositionWithAngleDistance(10, 100)).toEqual({ x: -83.90715290764524, y: -54.40211108893698 });
	});
});
