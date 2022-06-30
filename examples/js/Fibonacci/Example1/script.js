import { Fibonacci } from "../../../../src/Fibonacci.js";
import { randomColor } from "../../../../src/randomColor.js";

class Draw {
	constructor() {
		this.canvas = document.getElementById("Canvas");
		this.canvas.width = window.innerWidth - 10;
		this.canvas.height = window.innerHeight - 10;
		this.ctx = this.canvas.getContext("2d");
		this.ctx.font = "30px Arial";
		this.ctx.textAlign = "center";

		this.fibonacci = new Fibonacci();

		this.draw();
	}

	calcNextNumber() {
		this.fibonacci.next();
		this.draw();
	}

	remove() {
		this.fibonacci.before();
		this.draw();
	}

	// -- UI
	draw() {
		const sequence = this.fibonacci.sequence;
		console.clear();
		console.log(sequence);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		const barWidth = this.canvas.width / sequence.length;
		for (let i = 0; i < sequence.length; i++) {
			const x = i * barWidth;
			const y = this.canvas.height - sequence[i] * this.canvas.height / sequence[sequence.length - 1];
			const width = barWidth;
			const height = sequence[i] * this.canvas.height / sequence[sequence.length - 1];
			const text = sequence[i];
			const fontSize = Math.floor(width / text.toString().length);
			this.ctx.font = `${fontSize}px Arial`;

			this.drawRect(x, y, width, height, randomColor());
			this.drawText(x + width / 2, y + (i === sequence.length - 1 ? height / 2 : 0), text, "white");
		}
	}

	drawRect(x, y, width, height, color) {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(x, y, width, height);
	}

	drawText(x, y, text, color) {
		this.ctx.fillStyle = color;
		this.ctx.fillText(text, x, y);
	}
}

window.onload = () => {
	const draw = new Draw();
	document.getElementById("NextBTN")
		.addEventListener("click", async () => { draw.calcNextNumber(); });

	document.getElementById("RemoveBTN")
		.addEventListener("click", async () => { draw.remove(); });
};
