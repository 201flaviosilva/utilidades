import { Strings } from "./src/main";
const { capitalize } = Strings;

describe("Strings/capitalize.js", () => {
	it("capitalize a lowercase word", () => {
		expect(capitalize("beep")).toBe("Beep");
	});

	it("capitalize an already capitalized word", () => {
		expect(capitalize("Boop")).toBe("Boop");
	});

	it("capitalize an empty string", () => {
		expect(capitalize("")).toBe("");
	});

	it("handle strings with multiple words (only capitalize the first letter)", () => {
		expect(capitalize("beep boop")).toBe("Beep boop");
	});

	it("throw an error for non-string input", () => {
		expect(() => capitalize(123)).toThrow(TypeError);
		expect(() => capitalize(null)).toThrow(TypeError);
		expect(() => capitalize(undefined)).toThrow(TypeError);
		expect(() => capitalize({})).toThrow(TypeError);
	});
});
