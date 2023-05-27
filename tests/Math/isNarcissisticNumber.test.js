import { Maths } from "./src/main";
const { isNarcissisticNumber } = Maths;

describe("Maths/isNarcissisticNumber.js", () => {
	it("should return true for 153", () => {
		expect(isNarcissisticNumber(153)).toBe(true);
	});

	it("should return true for 1", () => {
		expect(isNarcissisticNumber(1)).toBe(true);
	});

	it("should return false for 435", () => {
		expect(isNarcissisticNumber(435)).toBe(false);
	});

	it("should return true for 370", () => {
		expect(isNarcissisticNumber(370)).toBe(true);
	});

	it("should return false for 324", () => {
		expect(isNarcissisticNumber(324)).toBe(false);
	});

	it("should return true for 371", () => {
		expect(isNarcissisticNumber(371)).toBe(true);
	});

	it("should return false for 4328", () => {
		expect(isNarcissisticNumber(4328)).toBe(false);
	});

	it("should return true for 407", () => {
		expect(isNarcissisticNumber(407)).toBe(true);
	});

	it("should return false for 3248", () => {
		expect(isNarcissisticNumber(3248)).toBe(false);
	});
});
