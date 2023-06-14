class Person2 {
	// 클래스 프로퍼티를 사전 선언해야함
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	walk() {
		console.log(`${this.name} is walking`);
	}
}

const person2 = new Person2("kin");
person2.walk();
