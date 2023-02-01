import { choiceTrend } from "../src/index";

describe("choiceTrend.js", () => {
	beforeEach(() => {
		jest.spyOn(global.Math, "random").mockReturnValue(0.5);
	});
	afterEach(() => {
		jest.spyOn(global.Math, "random").mockRestore();
	});

	it("should return 1 for the defaults values", () => {
		expect(choiceTrend()).toBe(1);
	});

	it("should return 0, for 0.5 and 0.5 values", () => {
		expect(choiceTrend([0.5, 0.5])).toBe(0);
	});

	it("should return 1, for 0.25 and 0.75 values", () => {
		expect(choiceTrend([0.25, 0.75])).toBe(1);
	});

	it("should return 4, for all 0.1 values", () => {
		expect(choiceTrend([0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1])).toBe(4);
	});

	it("should return undefined, for a empty array", () => {
		expect(choiceTrend([])).toBe(undefined);
	});
});
