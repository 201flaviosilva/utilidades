import { isFalsy, isTruthy } from "../src/index";

describe("isTruthyFalsy.js", () => {
	describe("isFalsy", () => {
		it("should return true for a falsy value", () => {
			expect(isFalsy(false)).toBe(true);
			expect(isFalsy("")).toBe(true);
			expect(isFalsy(0)).toBe(true);
			expect(isFalsy([])).toBe(true);
			expect(isFalsy({})).toBe(true);
			expect(isFalsy(null)).toBe(true);
			expect(isFalsy(undefined)).toBe(true);
			expect(isFalsy(NaN)).toBe(true);
		});

		it("should return false for a truthy value", () => {
			expect(isFalsy(true)).toBe(false);
			expect(isFalsy("Beep")).toBe(false);
			expect(isFalsy(1)).toBe(false);
			expect(isFalsy({ dog: "Lua" })).toBe(false);
			expect(isFalsy(["Snoopy", "Ninica", "Lua"])).toBe(false);
			expect(isFalsy(console)).toBe(false);
		});
	});

	describe("isTruthy", () => {
		it("should return false for a falsy value", () => {
			expect(isTruthy(false)).toBe(false);
			expect(isTruthy("")).toBe(false);
			expect(isTruthy(0)).toBe(false);
			expect(isTruthy([])).toBe(false);
			expect(isTruthy({})).toBe(false);
			expect(isTruthy(null)).toBe(false);
			expect(isTruthy(undefined)).toBe(false);
			expect(isTruthy(NaN)).toBe(false);
		});

		it("should return true for a truthy value", () => {
			expect(isTruthy(true)).toBe(true);
			expect(isTruthy("Beep")).toBe(true);
			expect(isTruthy(1)).toBe(true);
			expect(isTruthy({ dog: "Lua" })).toBe(true);
			expect(isTruthy(["Snoopy", "Ninica", "Lua"])).toBe(true);
			expect(isTruthy(console)).toBe(true);
		});
	});
});
