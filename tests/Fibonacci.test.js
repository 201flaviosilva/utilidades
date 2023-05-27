import { Fibonacci, fibonacciCustomSequence, fibonacciSequence, fibonacciUntil, recursiveFibonacci } from "./src/main";

describe("Fibonacci.js", () => {
	describe("Fibonacci Class", () => {
		describe("constructor()", () => {
			it("should all value be the initial values", () => {
				const f = new Fibonacci();

				expect(f._lastNumber).toBe(0);
				expect(f._currentNumber).toBe(1);
				expect(f.sequence).toEqual([0]);
			});
		});

		describe("next()", () => {
			test("get the next valeu [0,1,2,3,5,8,13,etc..]", () => {
				const f = new Fibonacci();
				expect(f.sequence).toEqual([0]);

				expect(f.next()).toEqual(1);
				expect(f.sequence).toEqual([0, 1]);

				expect(f.next()).toEqual(2);
				expect(f.sequence).toEqual([0, 1, 2]);

				expect(f.next()).toEqual(3);
				expect(f.sequence).toEqual([0, 1, 2, 3]);

				expect(f.next()).toEqual(5);
				expect(f.sequence).toEqual([0, 1, 2, 3, 5]);

				expect(f.next()).toEqual(8);
				expect(f.sequence).toEqual([0, 1, 2, 3, 5, 8]);
			});
		});

		describe("current()", () => {
			test("get the last number in the sequence", () => {
				const f = new Fibonacci();
				expect(f.current()).toEqual(0);

				f.next();
				expect(f.current()).toEqual(1);

				f.next();
				expect(f.current()).toEqual(2);

				f.next();
				expect(f.current()).toEqual(3);

				f.next();
				expect(f.current()).toEqual(5);

				f.before();
				expect(f.current()).toEqual(3);
			});
		});

		describe("before()", () => {
			test("get the next valeu [0,1,2,3,5,8,13,etc..]", () => {
				const f = new Fibonacci();

				f.before();
				expect(f.sequence).toEqual([0]);

				f.next();
				f.next();
				f.next();
				f.next();
				f.next();
				expect(f.sequence).toEqual([0, 1, 2, 3, 5, 8]);

				expect(f.before()).toEqual(5);
				expect(f.sequence).toEqual([0, 1, 2, 3, 5]);

				expect(f.before()).toEqual(3);
				expect(f.sequence).toEqual([0, 1, 2, 3]);

				expect(f.before()).toEqual(2);
				expect(f.sequence).toEqual([0, 1, 2]);


				expect(f.before()).toEqual(1);
				expect(f.sequence).toEqual([0, 1]);

				f.before();
				expect(f.sequence).toEqual([0]);

				f.before();
				expect(f.sequence).toEqual([0]);
			});
		});
	});

	describe("fibonacciSequence()", () => {
		it("should return the sequence with the given number of the times", () => {
			expect(fibonacciSequence(2)).toEqual([0, 1]);
			expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
			expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
			expect(fibonacciSequence().length).toBe(20);
		});
	});

	describe("fibonacciUntil()", () => {
		it("should return the sequence until the given max number", () => {
			expect(fibonacciUntil(2)).toEqual([0, 1, 1]);
			expect(fibonacciUntil(5)).toEqual([0, 1, 1, 2, 3]);
			expect(fibonacciUntil(100)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
		});
	});

	describe("fibonacciCustomSequence()", () => {
		it("should fibonacci like but starting with the given value", () => {
			expect(fibonacciCustomSequence()).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
			expect(fibonacciCustomSequence(50)).toEqual([50, 100, 150]);
			expect(fibonacciCustomSequence(5, 20)).toEqual([5, 10, 15, 25]);
			expect(fibonacciCustomSequence(10, 120)).toEqual([10, 20, 30, 50, 80, 130]);
		});
	});

	describe("recursiveFibonacci()", () => {
		it("should return the last element", () => {
			expect(recursiveFibonacci()).toEqual(55);
			expect(recursiveFibonacci(1)).toEqual(1);
			expect(recursiveFibonacci(2)).toEqual(1);
			expect(recursiveFibonacci(5)).toEqual(5);
		});
	});
});
