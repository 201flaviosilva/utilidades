import { Fibonacci } from "../../../src/Fibonacci.js";

const f = new Fibonacci();

for (i = 0; i < 10; i++) {
	console.log(f.next()); // 1,2,3,5,8,13,21,34,55,89
}

for (i = 0; i < 5; i++) {
	console.log(f.before()); // 55,34,21,13,8
}
