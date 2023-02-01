import { Maths } from "../../src/index.js";
const { mode } = Maths;

describe("Maths/mode.js", () => {
	it("returns the most repeated number", () => {
		expect(mode(1, 2, 2, 3, 4)).toBe(2);
	});

	it("returns the most repeated string", () => {
		expect(mode("a", "b", "c", "c", "c")).toBe("c");
	});

	it("returns the first most repeated element", () => {
		expect(mode("a", "a", "b", "b", "c")).toBe("a");
	});

	it("returns the only element when there is only one", () => {
		expect(mode("a")).toBe("a");
		expect(mode(1)).toBe(1);
	});
});
