import { allCharactersSame } from "../src/index";

describe("allCharactersSame.js", () => {
	test("if all characters of a string are equal", () => {
		expect(allCharactersSame("beep")).toBe(false);
		expect(allCharactersSame("")).toBe(true);
		expect(allCharactersSame("b")).toBe(true);
		expect(allCharactersSame("aaaaaaaaaaaa")).toBe(true);
	});

	test("if all characters of a array are equal", () => {
		expect(allCharactersSame(["a", "a"])).toBe(true);
		expect(allCharactersSame(["beep", "beep"])).toBe(true);
		expect(allCharactersSame(["a", "b"])).toBe(false);
		expect(allCharactersSame([1, 2])).toBe(false);
	});
});
