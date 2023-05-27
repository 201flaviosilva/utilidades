import { randomColor, randomColor0X, randomRGBAColor, randomRGBColor } from "./src/main";

describe("randomColor.js", () => {
	describe("randomColor", () => {
		it("should return a string", () => {
			for (let i = 0; i < 10; i++) {
				expect(typeof randomColor() === "string").toBe(true);
			}
		});
	});

	describe("randomColor0X", () => {
		it("should return a string", () => {
			for (let i = 0; i < 10; i++) {
				expect(typeof randomColor0X() === "string").toBe(true);
			}
		});
	});

	describe("randomRGBColor", () => {
		it("should return a string", () => {
			for (let i = 0; i < 10; i++) {
				expect(typeof randomRGBColor() === "string").toBe(true);
			}
		});
	});

	describe("randomRGBAColor", () => {
		it("should return a string", () => {
			for (let i = 0; i < 10; i++) {
				expect(typeof randomRGBAColor() === "string").toBe(true);
			}
		});
	});
});
