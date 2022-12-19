import { Arrays } from "../../src/index.js";
const { shuffle } = Arrays;

describe("Arrays/shuffle.js", () => {
	it("should not change the original array if the `mutateOriginal` parm is false", () => {
		const mockArr = [{ a: 1 }, { b: 2 }, { c: 3 }];
		shuffle(mockArr, false);
		expect(mockArr).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
	});

	it("should change the original array if the `mutateOriginal` parm is true/undefined", () => {
		const mockArrOriginal = [];
		for (let i = 0; i < 100; i++) mockArrOriginal.push(i);
		const copy = [...mockArrOriginal];

		expect(shuffle(copy)).not.toEqual(mockArrOriginal);
	});
});
