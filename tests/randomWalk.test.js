import { randomWalk } from "./src/main";

describe("randomWalk.js", () => {
	let spy;

	beforeEach(() => {
		spy = vitest.spyOn(global.Math, "random").mockReturnValue(0.5);
	});

	afterEach(() => {
		spy.mockRestore();
	});

	test("should return an object with x and y coordinates", () => {
		const steps = 10;
		const result = randomWalk(steps);

		expect(result).toHaveProperty("x");
		expect(result).toHaveProperty("y");

		expect(typeof result.x).toBe("number");
		expect(typeof result.y).toBe("number");
	});

	test("should return the correct final position after the specified number of steps", () => {
		const steps = 10;
		const result = randomWalk(steps);

		expect(result.x).toBe(0);
		expect(result.y).toBe(steps);
	});
});
