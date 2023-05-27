import Package from "../package.json";
import { getVersion } from "./src/main";

describe("getVersion.js", () => {
	it("should return the current lib version", () => {
		expect(getVersion()).toBe(Package.version);
	});
});
