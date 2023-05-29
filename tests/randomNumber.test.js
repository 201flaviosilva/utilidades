import * as utils from "./src/main";
import { randomFloat, randomInt, randomNumber } from "./src/randomNumber";

describe("randomNumber.js", () => {
	describe("randomFloat", () => {
		it("should return a random float number", () => {
			for (let i = 0; i < 10; i++) {
				expect(!Number.isInteger(randomFloat(0, 10, 5))).toBe(true);
				expect(!Number.isInteger(utils.randomFloat(0, 10, 5))).toBe(true);
			}
		});

		it("should return a random float number between 0 and 1", () => {
			for (let i = 0; i < 10; i++) {
				expect(randomFloat()).toBeLessThanOrEqual(1);
				expect(randomFloat()).toBeGreaterThanOrEqual(0);
				expect(utils.randomFloat()).toBeLessThanOrEqual(1);
				expect(utils.randomFloat()).toBeGreaterThanOrEqual(0);
			}
		});

		it("should return a random float number between 0 and 10", () => {
			for (let i = 0; i < 10; i++) {
				expect(randomFloat(10)).toBeLessThanOrEqual(10);
				expect(randomFloat(10)).toBeGreaterThanOrEqual(0);
				expect(utils.randomFloat(10)).toBeLessThanOrEqual(10);
				expect(utils.randomFloat(10)).toBeGreaterThanOrEqual(0);
			}
		});

		it("should return a random float number between 5 and 10", () => {
			for (let i = 0; i < 10; i++) {
				expect(randomFloat(5, 10)).toBeLessThanOrEqual(10);
				expect(randomFloat(5, 10)).toBeGreaterThanOrEqual(5);
				expect(utils.randomFloat(5, 10)).toBeLessThanOrEqual(10);
				expect(utils.randomFloat(5, 10)).toBeGreaterThanOrEqual(5);
			}
		});
	});

	describe("randomInt", () => {
		it("should return a random integer number", () => {
			for (let i = 0; i < 10; i++) {
				expect(Number.isInteger(randomInt(0, 10))).toBe(true);
				expect(Number.isInteger(utils.randomInt(0, 10))).toBe(true);
			}
		});

		it("should return a random integer number between 0 and 1", () => {
			for (let i = 0; i < 10; i++) {
				expect(randomInt(0, 1)).toBeLessThanOrEqual(1);
				expect(randomInt(0, 1)).toBeGreaterThanOrEqual(0);
				expect(utils.randomInt(0, 1)).toBeLessThanOrEqual(1);
				expect(utils.randomInt(0, 1)).toBeGreaterThanOrEqual(0);
			}
		});

		it("should return a random integer number between 1", () => {
			for (let i = 0; i < 10; i++) {
				expect(randomInt(10)).toBeLessThanOrEqual(10);
				expect(randomInt(10)).toBeGreaterThanOrEqual(0);
				expect(utils.randomInt(10)).toBeLessThanOrEqual(10);
				expect(utils.randomInt(10)).toBeGreaterThanOrEqual(0);
			}
		});

		it("should return a random integer number between 5 and 1", () => {
			for (let i = 0; i < 10; i++) {
				expect(randomInt(5, 10)).toBeLessThanOrEqual(10);
				expect(randomInt(5, 10)).toBeGreaterThanOrEqual(5);
				expect(utils.randomInt(5, 10)).toBeLessThanOrEqual(10);
				expect(utils.randomInt(5, 10)).toBeGreaterThanOrEqual(5);
			}
		});
	});

	describe("randomNumber", () => {
		it("should return a random number 0 and 10", () => {
			for (let i = 0; i < 10; i++) {
				expect(randomNumber(0, 10)).toBeLessThanOrEqual(10);
				expect(randomNumber(0, 10)).toBeGreaterThanOrEqual(0);
				expect(utils.randomNumber(0, 10)).toBeLessThanOrEqual(10);
				expect(utils.randomNumber(0, 10)).toBeGreaterThanOrEqual(0);
			}
		});
	});
});
