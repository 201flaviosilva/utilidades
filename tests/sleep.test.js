import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { sleep } from "./src/main";

describe("sleep.js", () => {
	beforeEach(vi.useFakeTimers);
	afterEach(vi.clearAllTimers);

	it("should return a promise", () => {
		expect(sleep()).toBeInstanceOf(Promise);
	});

	it("should pause the thread for the determined time", async () => {
		const promise = sleep(10000);
		expect(vi.getTimerCount()).toBe(1);
		vi.advanceTimersByTime(10000);
		expect(promise).resolves;
		expect(vi.getTimerCount()).toBe(0);
	});

	it("throws an error for negative time", async () => {
		try {
			await sleep(-100);
			throw new Error("Promise should not resolve");
		} catch (error) {
			expect(error.message).toBe("Time must be a non-negative number");
		}
	});

	it("throws an error for non-numeric time", async () => {
		try {
			await sleep("abc");
			throw new Error("Promise should not resolve");
		} catch (error) {
			expect(error.message).toBe("Time must be a non-negative number");
		}
	});
});
