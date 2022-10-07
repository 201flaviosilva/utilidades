// Class
class Singleton {
	constructor() {
		if (Singleton.instance instanceof Singleton)
			return Singleton.instance;

		this.name = "Sabrina";
		this.age = 2;
		this.random = Math.floor(Math.random() * 100);

		Singleton.instance = this;
	}
}


// Normal code

const s1 = new Singleton();
const s2 = new Singleton();

console.log(s1);
s1.name = "Tio Patinhas";
console.log(s2);
