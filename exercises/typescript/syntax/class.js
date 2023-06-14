"use strict";
class Person2 {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}
const person2 = new Person2("kin");
person2.walk();
