import { Arrays } from "./src/main";
const { moveLeft, moveRight, } = Arrays;

describe("Arrays/move.js", () => {
	describe("moveLeft", () => {
		it("should move the elements of the array to the left", () => {
			expect(moveLeft([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1]);
			expect(moveLeft([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
			expect(moveLeft(["a", "b", "c", "d", "e"], 7)).toEqual(["c", "d", "e", "a", "b"]);
			expect(moveLeft(["a", "b"], 3)).toEqual(["b", "a"]);
		});
	});

	describe("moveRight", () => {
		it("should move the elements of the array to the right", () => {
			expect(moveRight([1, 2, 3, 4, 5])).toEqual([5, 1, 2, 3, 4]);
			expect(moveRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
			expect(moveRight(["a", "b", "c", "d", "e"], 7)).toEqual(["d", "e", "a", "b", "c"]);
			expect(moveRight(["a", "b"], 3)).toEqual(["b", "a"]);
		});
	});
});
