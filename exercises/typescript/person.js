"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}
const person = new Person("Lee");
console.log(person.sayHello());
console.log(person.sayHello());
console.log("hi");
