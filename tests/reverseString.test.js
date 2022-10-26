import { reverseString } from "../src/index";

describe("reverseString.js", () => {
	it("should return the same string but reversed", () => {
		expect(reverseString("beep")).toBe("peeb");
		expect(reverseString("Beep")).toBe("peeB");
		expect(reverseString("Beep Boop")).toBe("pooB peeB");
		expect(reverseString("beep boop 1 20")).toBe("02 1 poob peeb");
	});
});
