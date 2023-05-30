import { Arrays } from "./src/main";
const { choice } = Arrays;

describe("Arrays/choice.js", () => {
	let spy;

	beforeEach(() => {
		spy = vitest.spyOn(global.Math, "random").mockReturnValue(0.1);
	});
	afterEach(() => {
		spy.mockRestore();
	});

	it("should return A", () => {
		expect(choice(["A", "B", "C"])).toBe("A");
	});

	it("should return 10", () => {
		expect(choice([10, 5, 123])).toBe(10);
	});
});
