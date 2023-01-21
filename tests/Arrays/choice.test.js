import { Arrays } from "../../src/index.js";
const { choice } = Arrays;

describe("Arrays/choice.js", () => {
	beforeEach(() => {
		jest.spyOn(global.Math, "random").mockReturnValue(0.1);
	});
	afterEach(() => {
		jest.spyOn(global.Math, "random").mockRestore();
	});

	it("should return A", () => {
		expect(choice(["A", "B", "C"])).toBe("A");
	});

	it("should return 10", () => {
		expect(choice([10, 5, 123])).toBe(10);
	});
});
