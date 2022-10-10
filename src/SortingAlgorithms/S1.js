const numberArr = [3, 5, 1, 6, 10, 7, 2, 6];
const stringArr = ["b", "t", "a", "c"];

export function arraySort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let low = arr[i];
		let index = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < low) {
				low = arr[j];
				index = j;
			}
		}

		if (low !== arr[i]) {
			arr[index] = arr[i];
			arr[i] = low;
		}
	}

	return arr;
}

console.log(arraySort(numberArr)); // [1,2,3,5,6,6,7,10]
console.log(arraySort(stringArr)); // ["a","b","c","t"]
