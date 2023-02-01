import { decimal2Binary } from "../src/index";

describe("decimal2Binary.js", () => {
	it("should return '101010' for 42", () => {
		expect(decimal2Binary(42)).toBe("101010");
	});
});
