import { Maths } from "./src/main";
const { getPositionWithAngleDistance } = Maths;

describe("Maths/getPositionWithAngleDistance.js", () => {
	it("should return a position based in the given angle, distance, and origin", () => {
		expect(getPositionWithAngleDistance(10, 100)).toEqual({ x: -83.90715290764524, y: -54.40211108893698 });
	});

	it("should return correct position for angle and distance", () => {
		const angle = 10;
		const distance = 100;
		const origin = { x: 0, y: 0 };
		const expectedPosition = { x: -83.90715290764524, y: -54.40211108893698 };

		expect(getPositionWithAngleDistance(angle, distance, origin)).toEqual(expectedPosition);
	});
});
