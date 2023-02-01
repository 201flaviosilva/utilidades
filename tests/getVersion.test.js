import { getVersion } from "../src/index";
import Package from "../package.json";

describe("getVersion.js", () => {
	it("should return the current lib version", () => {
		expect(getVersion()).toBe(Package.version);
	});
});
