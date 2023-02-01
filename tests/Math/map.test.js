import { Maths } from "../../src/index.js";
const { map } = Maths;

describe("Maths/map.js", () => {
	it("maps value from range1 to range2", () => {
		expect(map(-10, 0, 100, 0, 1000)).toEqual(-100);
		expect(map(0, 0, 100, 0, 1000)).toEqual(0);
		expect(map(10, 0, 100, 0, 1000)).toEqual(100);
		expect(map(50, 0, 100, 0, 1000)).toEqual(500);
		expect(map(1000, 0, 100, 0, 1000)).toEqual(10000);
	});
});
