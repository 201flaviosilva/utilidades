import { topDownCarMovimentation } from "../../../src/topDownCarMovimentation.js";

// -- Configs
const FPSDiv = document.getElementById("FPS");
const world = {
	width: 800,
	height: 600,
	middleWidth: 0,
	middleHeight: 0,
};

const moveKeys = {
	up1: "W",
	up2: "UP",
	down1: "S",
	down2: "DOWN",
	left1: "LEFT",
	left2: "A",
	right1: "RIGHT",
	right2: "D",
};

class Car extends Phaser.GameObjects.Rectangle {
	constructor(scene, x, y, width, height, color) {
		super(scene, x, y, width, height, color);
		scene.add.existing(this);

		this.speed = 0;
		this.acceleration = 0.2;
		this.maxSpeed = 3;
		this.friction = 0.05;
		this.rotationSpeed = 0.03;

		this.keys = this.scene.input.keyboard.addKeys(moveKeys);
	}

	update() {
		const {
			keys,
			x, y,
			speed,
			acceleration,
			maxSpeed,
			friction,
			rotation,
			rotationSpeed
		} = this;

		const move = topDownCarMovimentation({
			keys: {
				forward: keys.up1.isDown || keys.up2.isDown,
				reverse: keys.down1.isDown || keys.down2.isDown,
				left: keys.left1.isDown || keys.left2.isDown,
				right: keys.right1.isDown || keys.right2.isDown,
			},
			x, y,
			speed,
			acceleration,
			maxSpeed,
			friction,
			rotation,
			rotationSpeed,
			bounds: {
				x: { min: 0, max: world.width },
				y: { min: 0, max: world.height },
			}
		});

		this.setPosition(move.x, move.y);
		this.setRotation(move.rotation);
		this.speed = move.speed;
	}
}

// -- Game
class MainScene extends Phaser.Scene {
	constructor() {
		super({ key: "MainScene", });
	}

	create() {
		const { width, height } = world;
		this.player = new Car(this, width / 2, height / 2, 32, 64, 0xffffff);
	}

	update() {
		FPSDiv.innerHTML = game.loop.actualFps.toFixed(1);
		this.player.update();
	}
}

const config = {
	width: world.width,
	height: world.height,
	type: Phaser.Auto,
	backgroundColor: "#000000",
	physics: {
		default: "arcade",
		arcade: { debug: true, }
	},
	scene: [MainScene],
};
const game = new Phaser.Game(config);
