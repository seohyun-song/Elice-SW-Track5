// factory pattern with generics
interface Car {
	drive(): void;
	park(): void;
}

class Bus implements Car {
	drive(): void {}
	park(): void {}
}
class Taxi implements Car {
	drive(): void {}
	park(): void {}
}

class CarFactory {
	static createInstance<T extends Car>(type: { new (): T }): T {
		return new type();
	}
}

const bus = CarFactory.createInstance(Bus);
const taxi = CarFactory.createInstance(Taxi);
