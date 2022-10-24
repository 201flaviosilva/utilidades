import { randomFloat, randomInt, randomNumber } from "../src/randomNumber";

describe("randomNumber.js", () => {
	describe("randomFloat", () => {
		it("should return a random float number", () => {
			for (let i = 0; i < 10; i++) {
				expect(!Number.isInteger(randomFloat(0, 10, 5))).toBe(true);

				// 0 - 1
				expect(randomFloat()).toBeLessThanOrEqual(1);
				expect(randomFloat()).toBeGreaterThanOrEqual(0);

				// 0 - 10
				expect(randomFloat(10)).toBeLessThanOrEqual(10);
				expect(randomFloat(10)).toBeGreaterThanOrEqual(0);

				// 5 - 10
				expect(randomFloat(5, 10)).toBeLessThanOrEqual(10);
				expect(randomFloat(5, 10)).toBeGreaterThanOrEqual(5);
			}
		});
	});

	describe("randomInt", () => {
		it("should return a random integer number", () => {
			for (let i = 0; i < 10; i++) {
				expect(Number.isInteger(randomInt(0, 10))).toBe(true);

				// 0 - 1
				expect(randomInt(0, 1)).toBeLessThanOrEqual(1);
				expect(randomInt(0, 10)).toBeGreaterThanOrEqual(0);

				// 0 - 10
				expect(randomInt(10)).toBeLessThanOrEqual(10);
				expect(randomInt(10)).toBeGreaterThanOrEqual(0);

				// 5 - 10
				expect(randomInt(5, 10)).toBeLessThanOrEqual(10);
				expect(randomInt(5, 10)).toBeGreaterThanOrEqual(5);
			}
		});
	});

	describe("randomNumber", () => {
		it("should return a random number", () => {
			for (let i = 0; i < 10; i++) {
				expect(randomNumber(0, 10)).toBeLessThanOrEqual(10);
				expect(randomNumber(0, 10)).toBeGreaterThanOrEqual(0);
			}
		});
	});
});
