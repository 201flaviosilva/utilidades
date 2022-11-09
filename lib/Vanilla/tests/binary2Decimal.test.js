import { binary2Decimal } from "../src/index";

describe("binary2Decimal.js", () => {
	it("should return 42 for '101010'", () => {
		expect(binary2Decimal("101010")).toBe(42);
	});
});
