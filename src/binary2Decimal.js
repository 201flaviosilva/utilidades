/**
 * Convert a binary number to a decimal
 * 
 * @example
 * binary2Decimal("101010"); // 42
 * 
 * @param {string} binary - the value to be converted
 * @returns {number} - conversion decimal
 */
export function binary2Decimal(binary) {
	if (typeof binary === "string") return parseInt(binary, 2);
}
