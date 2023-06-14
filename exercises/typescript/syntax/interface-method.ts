// 인터페이스는 프로퍼티 뿐만 아니라 메서드도 정의 가능
// 단 추상 메서드이어야 한다.
interface IPerson {
	name: string;
	sayHello(): void;
}

// 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와
// 추상 메서드를 반드시 구현하여야 한다.
class Person3 implements IPerson {
	constructor(public name: string) {}

	// 인터페이스에서 정의한 추상 메서드의 구현
	sayHello(): void {
		console.log(`Hello ${this.name}`);
	}
}

const me = new Person3("Lee");
me.sayHello();
