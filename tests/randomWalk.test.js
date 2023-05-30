import { randomWalk } from "./src/main";

describe("randomWalk.js", () => {
	let spy;

	beforeEach(() => {
		spy = vitest.spyOn(global.Math, "random").mockReturnValue(0.5);
	});

	afterEach(() => {
		spy.mockRestore();
	});

	test("should generate a 1D random walk with the specified number of steps", () => {
		const steps = 100;
		const dimension = 1;
		const walk = randomWalk(steps, dimension);

		expect(walk.length).toBe(dimension);
		expect(typeof walk[0]).toBe("number");
	});

	test("should generate a 2D random walk with the specified number of steps", () => {
		const steps = 100;
		const dimension = 2;
		const walk = randomWalk(steps, dimension);

		expect(walk.length).toBe(dimension);
		expect(typeof walk[0]).toBe("number");
		expect(typeof walk[1]).toBe("number");
	});

	test("should generate a 3D random walk with the specified number of steps", () => {
		const steps = 100;
		const dimension = 3;
		const walk = randomWalk(steps, dimension);

		expect(walk.length).toBe(dimension);
		expect(typeof walk[0]).toBe("number");
		expect(typeof walk[1]).toBe("number");
		expect(typeof walk[2]).toBe("number");
	});
});
