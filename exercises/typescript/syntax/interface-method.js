"use strict";
// 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와
// 추상 메서드를 반드시 구현하여야 한다.
class Person3 {
    constructor(name) {
        this.name = name;
    }
    // 인터페이스에서 정의한 추상 메서드의 구현
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
const me = new Person3("Lee");
me.sayHello();
