class Animals {
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	getName() {
		return "Name is " + this.name;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

// 클래스 상속
// Snake is a subclasses of Animals
class Snake extends Animals {
	// Constructors for derived classes must contain a 'super' call.
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 5) {
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

let snake = new Snake("Sammy the Python");
snake.move();
