import { Maths } from "./src/main";
const { divideEvenly, divideEvenlyWithSpread, } = Maths;

describe("Maths/divideEvenly.js", () => {
	describe("divideEvenly", () => {
		it("should return the a array with a values with the same space between all", () => {
			expect(divideEvenly()).toEqual([0, 2.5, 5, 7.5, 10]);
			expect(divideEvenly(0, 10, 2)).toEqual([0, 10]);
			expect(divideEvenly(-45, 45, 3)).toEqual([-45, 0, 45]);
		});
	});

	describe("divideEvenlyWithSpread", () => {
		it("---", () => {
			expect(divideEvenlyWithSpread(10, 5)).toEqual([-5, -3.888888888888889, -2.7777777777777777, -1.6666666666666665, -0.5555555555555554, 0.5555555555555554, 1.666666666666667, 2.7777777777777777, 3.8888888888888893, 5]);
		});
	});
});
