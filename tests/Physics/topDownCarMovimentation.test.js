import { Physics } from "./src/main";
const { topDownCarMovimentation } = Physics;

describe("Physics/topDownCarMovimentation.js", () => {
	it("should increase the speed if forward key is pressed", () => {
		const state = {
			keys: { forward: true },
			x: 0,
			y: 0,
			speed: 0,
			acceleration: 1,
			maxSpeed: Infinity,
			friction: 0,
			rotation: 0,
			rotationSpeed: 0,
			bounds: {
				x: { min: -Infinity, max: Infinity },
				y: { min: -Infinity, max: Infinity },
			},
		};

		const result = topDownCarMovimentation(state);
		expect(result.speed).toBeGreaterThan(0);
	});

	it("should decrease the speed if reverse key is pressed", () => {
		const state = {
			keys: { reverse: true },
			x: 0,
			y: 0,
			speed: 1,
			acceleration: 1,
			maxSpeed: Infinity,
			friction: 0,
			rotation: 0,
			rotationSpeed: 0,
			bounds: {
				x: { min: -Infinity, max: Infinity },
				y: { min: -Infinity, max: Infinity },
			},
		};

		const result = topDownCarMovimentation(state);
		expect(result.speed).toBeLessThanOrEqual(0);
	});

	it("should change the rotation if left key is pressed", () => {
		const state = {
			keys: { forward: true, left: true },
			x: 0,
			y: 0,
			speed: 1,
			acceleration: 1,
			maxSpeed: Infinity,
			friction: 0,
			rotation: 0,
			rotationSpeed: 1,
			bounds: {
				x: { min: -Infinity, max: Infinity },
				y: { min: -Infinity, max: Infinity },
			},
		};

		const result = topDownCarMovimentation(state);
		expect(result.rotation).toBeLessThan(0);
	});

	it("should change the rotation if right key is pressed", () => {
		const state = {
			keys: { forward: true, right: true },
			x: 0,
			y: 0,
			speed: 1,
			acceleration: 1,
			maxSpeed: Infinity,
			friction: 0,
			rotation: 0,
			rotationSpeed: 1,
			bounds: {
				x: { min: -Infinity, max: Infinity },
				y: { min: -Infinity, max: Infinity },
			},
		};

		const result = topDownCarMovimentation(state);
		expect(result.rotation).toBeGreaterThan(0);
	});
});
