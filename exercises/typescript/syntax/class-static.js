"use strict";
// ES6의 static은 타입스크립트에서도 사용가능하다.
// static members 는 클래스 이름으로만 접근 가능
class Circle {
    static getArea(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = Math.PI;
Circle.getArea(5);
