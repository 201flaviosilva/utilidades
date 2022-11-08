function choiceTrend(options = [0.25, 0.5, 0.25]) {
	let sum = 0;
	const trend = options.map(o => {
		sum += o;
		return sum;
	});

	console.log(trend);

	const random = Math.random();
	if (random <= trend[0]) {
		console.log("0 -> ", random);
	} else if (random <= trend[1]) {
		console.log("1 -> ", random);
	} else {
		console.log("2 -> ", random);
	}
}
