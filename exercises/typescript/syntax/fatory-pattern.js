"use strict";
class Bus {
    drive() { }
    park() { }
}
class Taxi {
    drive() { }
    park() { }
}
class CarFactory {
    static createInstance(type) {
        return new type();
    }
}
const bus = CarFactory.createInstance(Bus);
const taxi = CarFactory.createInstance(Taxi);
