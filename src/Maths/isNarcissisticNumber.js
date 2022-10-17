/**
 * A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
 * 
 * Ex: 153, where l = 3 ( the number of digits in 153 )
 * 13 + 53 + 33 = 153
 * 
 * @see {@link https://en.wikipedia.org/wiki/Narcissistic_number}
 * @see {@link https://www.codewars.com/kata/56b22765e1007b79f2000079/}
 * 
 * @example
 * isNarcissistic(153); // true
 * isNarcissistic(1); // true
 * isNarcissistic(435); // false
 * isNarcissistic(370); // true
 * isNarcissistic(324); // false
 * isNarcissistic(371); // true
 * isNarcissistic(4328); // false
 * isNarcissistic(407); // true
 * isNarcissistic(3248); // false
 * 
 * @param {number} n - number to check if a narcissistic
 * @returns {boolean}
 * 
 * @function isNarcissisticNumber
 * @memberof Maths
 */
export function isNarcissisticNumber(n) {
	const stringN = String(n);
	let sum = 0;

	for (let i = 0; i < stringN.length; i++) {
		sum += Math.pow(stringN[i], stringN.length);
	}

	return sum === n;
}
