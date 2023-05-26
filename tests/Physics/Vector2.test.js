import { Physics } from "../../src/index.js";
import { degreesToRadians } from "../../src/Maths";
const { Vector2 } = Physics;

describe("Vector2.js", () => {
	describe("constructor()", () => {
		it("should create a new Vector2 with the given parameters", () => {
			// Not passing any value
			const v0 = new Vector2();
			expect(v0.x).toBe(0);
			expect(v0.y).toBe(0);

			// Just passing the x value
			const v1 = new Vector2(5);
			expect(v1.x).toBe(5);
			expect(v1.y).toBe(5);

			// Passing the x, and y value
			const v2 = new Vector2(5, 10);
			expect(v2.x).toBe(5);
			expect(v2.y).toBe(10);

			// Passing the values as object
			const v3 = new Vector2({ x: -11, y: 100 });
			expect(v3.x).toBe(-11);
			expect(v3.y).toBe(100);

			// Passing the values as empty object
			const v4 = new Vector2({ x: null, y: null });
			expect(v4.x).toBe(0);
			expect(v4.y).toBe(0);
		});
	});

	describe("set()", () => {
		it("should change the vector x and y to the given values", () => {
			// Not passing any value
			const v = new Vector2(1, 2);
			v.set();
			expect(v.x).toBe(0);
			expect(v.y).toBe(0);

			// Just passing the x value
			v.set(5);
			expect(v.x).toBe(5);
			expect(v.y).toBe(5);

			// Passing the x, and y value
			v.set(5, 10);
			expect(v.x).toBe(5);
			expect(v.y).toBe(10);

			// Passing the values as object
			v.set({ x: -11, y: 100, });
			expect(v.x).toBe(-11);
			expect(v.y).toBe(100);

			// Passing the values as empty object
			v.set({ x: null, y: null });
			expect(v.x).toBe(0);
			expect(v.y).toBe(0);

			expect(v.set()).toEqual(v);
		});
	});

	describe("clone()", () => {
		it("should return a new array with the same values as the original", () => {
			const v = new Vector2(1, 2);
			expect(v.clone()).toEqual(v);
		});
	});

	describe("add()", () => {
		it("should add the given values to the current properties", () => {
			const v = new Vector2(1, 2);
			v.add(new Vector2(10));

			expect(v.x).toEqual(11);
			expect(v.y).toEqual(12);
		});
	});

	describe("subtract()", () => {
		it("should subtract the given values to the current properties", () => {
			const v = new Vector2(1, 2);
			v.subtract(new Vector2(10));

			expect(v.x).toEqual(-9);
			expect(v.y).toEqual(-8);
		});
	});

	describe("scale()", () => {
		it("should multiply the given value to the current properties", () => {
			const v = new Vector2(1, 2);
			v.scale(10);

			expect(v.x).toEqual(10);
			expect(v.y).toEqual(20);
		});
	});

	describe("multiply()", () => {
		it("should multiply the given values to the current properties", () => {
			const v = new Vector2(1, 2);
			v.multiply(new Vector2(10, 2));

			expect(v.x).toEqual(10);
			expect(v.y).toEqual(4);
		});
	});

	describe("divide()", () => {
		it("should divide the given values to the current properties", () => {
			const v = new Vector2(1, 2);
			v.divide(new Vector2(2));

			expect(v.x).toEqual(0.5);
			expect(v.y).toEqual(1);
		});
	});

	describe("dot()", () => {
		it("should return the product of the 2 given vectors", () => {
			const v = new Vector2(10, 5);
			expect(v.dot(new Vector2(5))).toEqual(75);
		});
	});

	describe("moveTowards()", () => {
		it("should return the vector 2 moved to the target", () => {
			expect(new Vector2(10, 5).moveTowards()).toEqual(new Vector2(0, 0));

			expect(new Vector2(10, 5).moveTowards(new Vector2(5, 10))).toEqual(new Vector2(5, 10));

			expect(new Vector2(10, 5).moveTowards(new Vector2(5, 10), 0.5)).toEqual(new Vector2(7.5));

			// Check errors
			expect(new Vector2(10, 5).moveTowards(new Vector2(5, 10), 100)).toEqual(new Vector2(5, 10));
			expect(new Vector2(10, 5).moveTowards(new Vector2(5, 10), -100)).toEqual(new Vector2(10, 5));
		});
	});

	describe("magnitude()", () => {
		it("should return the magnitude of the vector", () => {
			expect(new Vector2(0).magnitude()).toBe(0);
			expect(new Vector2(1).magnitude()).toBe(2);
			expect(new Vector2(2).magnitude()).toBe(8);
			expect(new Vector2(5, 10).magnitude()).toBe(125);
		});
	});

	describe("magnitudeSqr()", () => {
		it("should return the square root of the vector", () => {
			expect(new Vector2(0).magnitudeSqr()).toBe(0);
			expect(new Vector2(1).magnitudeSqr()).toBe(1.4142135623730951);
			expect(new Vector2(2).magnitudeSqr()).toBe(2.8284271247461903);
			expect(new Vector2(5, 10).magnitudeSqr()).toBe(11.180339887498949);
		});
	});

	describe("distance()", () => {
		it("should return the distance between two vectors", () => {
			expect(new Vector2(5, 10).distance()).toBe(125);
			expect(new Vector2(5, 10).distance(new Vector2(100, 20))).toBe(9125);
			expect(Vector2.zero().distance(new Vector2(100, 20))).toBe(10400);
		});
	});

	describe("distanceSqrt()", () => {
		it("should return the square root distance between two vectors", () => {
			expect(new Vector2(5, 10).distanceSqrt()).toBe(11.180339887498949);
			expect(new Vector2(5, 10).distanceSqrt(new Vector2(100, 20))).toBe(95.524865872714);
			expect(Vector2.zero().distanceSqrt(new Vector2(100, 20))).toBe(101.9803902718557);
		});
	});

	describe("normalize()", () => {
		it("should return the x and y a number between 0 and 1 (normalized values)", () => {
			expect(new Vector2(5, 10).normalize()).toEqual(new Vector2(0.4472135954999579, 0.8944271909999159));
			expect(new Vector2(1000, 123).normalize()).toEqual(new Vector2(0.9925202644900105, 0.1220799925322713));
			expect(Vector2.zero().normalize()).toEqual(new Vector2(0, 0));
		});
	});

	describe("diferenceAngle()", () => {
		it("should return the angle diference between the given vector", () => {
			expect(new Vector2(5, 10).diferenceAngle(new Vector2(5, 10))).toBe(0);
			expect(new Vector2(1000, 123).diferenceAngle(new Vector2(5, 10))).toBe(-173.52080244507272);
			expect(Vector2.zero().diferenceAngle(new Vector2(90, 90))).toBe(45);
		});
	});

	describe("angle()", () => {
		it("should return the angle of the vector", () => {
			expect(new Vector2(5, 10).angle()).toBe(63.43494882292201);
			expect(new Vector2(-5, -10).angle()).toBe(243.434948822922);
			expect(new Vector2(1000, 123).angle()).toBe(7.012160102854924);
			expect(Vector2.zero().angle()).toBe(0);
		});
	});

	describe("rotate()", () => {
		it("should rotate the current vector", () => {
			expect(new Vector2(5, 10).rotate(degreesToRadians(45))).toEqual(new Vector2(-3.535533905932737, 10.606601717798213));
			expect(Vector2.zero().rotate()).toEqual(Vector2.zero());
		});
	});

	describe("toPrecision()", () => {
		it("should round to the given precision", () => {
			const v1 = new Vector2(5.555, 10.1234).toPrecision();
			expect(v1.x).toBe(5.6);
			expect(v1.y).toBe(10.1);

			const v2 = new Vector2(1.0987654321, 10).toPrecision(5);
			expect(v2.x).toBe(1.09877);
			expect(v2.y).toBe(10.00000);
		});
	});

	describe("equals()", () => {
		it("should true if the current vector is equal to the given vector", () => {
			expect(new Vector2(5, 10).equals(new Vector2(5, 10))).toBe(true);
			expect(new Vector2(10, 5).equals(new Vector2(5, 10))).toBe(false);
		});
	});

	describe("toString()", () => {
		it("should return a string representation", () => {
			expect(new Vector2(5, 10).toString()).toBe("[5; 10]");
			expect(Vector2.zero().toString()).toBe("[0; 0]");
		});
	});

	describe("absolute()", () => {
		it("should convert x and y positive", () => {
			expect(new Vector2(-5, 10).absolute()).toEqual(new Vector2(5, 10));
			expect(new Vector2(-5, -0).absolute()).toEqual(new Vector2(5, 0));
			expect(new Vector2(-5).absolute()).toEqual(new Vector2(5));
		});
	});

	describe("negative()", () => {
		it("should convert x and y negative", () => {
			expect(new Vector2(-5, 10).negative()).toEqual(new Vector2(-5, -10));
			expect(new Vector2(5).negative()).toEqual(new Vector2(-5));
		});
	});

	describe("negate()", () => {
		it("should put the components positive if the value is negative and the inverse too", () => {
			expect(new Vector2(-5, 10).negate()).toEqual(new Vector2(5, -10));
			expect(new Vector2(5).negate()).toEqual(new Vector2(-5));
			expect(new Vector2(1, -2).negate()).toEqual(new Vector2(-1, 2));
		});
	});

	describe("invert()", () => {
		it("should x value in the y value and the reverse", () => {
			expect(new Vector2(-5, 10).invert()).toEqual(new Vector2(10, -5));
			expect(new Vector2(5).invert()).toEqual(new Vector2(5));
			expect(new Vector2(1, 2).invert()).toEqual(new Vector2(2, 1));
		});
	});

	describe("Static shorthand function", () => {
		it("zero", () => {
			expect(Vector2.zero()).toEqual(new Vector2(0, 0));
			expect(Vector2.zero().x).toBe(0);
			expect(Vector2.zero().y).toBe(0);
		});

		it("one", () => {
			expect(Vector2.one()).toEqual(new Vector2(1, 1));
			expect(Vector2.one().x).toBe(1);
			expect(Vector2.one().y).toBe(1);
		});

		it("positiveInfinity", () => {
			expect(Vector2.positiveInfinity()).toEqual(new Vector2(Infinity, Infinity));
			expect(Vector2.positiveInfinity().x).toBe(Infinity);
			expect(Vector2.positiveInfinity().y).toBe(Infinity);
		});

		it("negativeInfinity", () => {
			expect(Vector2.negativeInfinity()).toEqual(new Vector2(-Infinity, -Infinity));
			expect(Vector2.negativeInfinity().x).toBe(-Infinity);
			expect(Vector2.negativeInfinity().y).toBe(-Infinity);
		});

		it("up", () => {
			expect(Vector2.up()).toEqual(new Vector2(0, -1));
			expect(Vector2.up().x).toBe(0);
			expect(Vector2.up().y).toBe(-1);
		});

		it("down", () => {
			expect(Vector2.down()).toEqual(new Vector2(0, 1));
			expect(Vector2.down().x).toBe(0);
			expect(Vector2.down().y).toBe(1);
		});

		it("left", () => {
			expect(Vector2.left()).toEqual(new Vector2(-1, 0));
			expect(Vector2.left().x).toBe(-1);
			expect(Vector2.left().y).toBe(0);
		});

		it("right", () => {
			expect(Vector2.right()).toEqual(new Vector2(1, 0));
			expect(Vector2.right().x).toBe(1);
			expect(Vector2.right().y).toBe(0);
		});

		it("random", () => {
			expect(Vector2.random().x).toBeLessThanOrEqual(1);
			expect(Vector2.random().x).toBeGreaterThanOrEqual(0);
			expect(Vector2.random().y).toBeLessThanOrEqual(1);
			expect(Vector2.random().y).toBeGreaterThanOrEqual(0);
		});
	})
});
