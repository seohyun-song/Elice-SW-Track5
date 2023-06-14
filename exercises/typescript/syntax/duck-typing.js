"use strict";
// 타입스크립트는 해당 인터페이스에서 정의한 프로퍼티나 메서드를 가지고 있다면
// 그 인터페이스를 구현한 것으로 인정한다.
// 이것을 덕 타이핑(duck typing) 또는 구조적 타이핑(structural typing)이라 한다.
// 클래스 MallarDuck은 인터페이스 IDuck을 구현하였다.
class MallarDuck {
    quack() {
        console.log("Quack!");
    }
}
// 클래스 RedHeadDuck은 인터페이스 IDuck을 구현하지는 않았지만 quack 메서드를 갖는다.
class RedHeadDuck {
    quack() {
        console.log("q~uack!");
    }
}
// makeNoise 함수는 인터페이스 IDuck을 구현한 클래스의 인스턴스 duck 을 인자로 받는다.
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallarDuck()); // Quack!
// makeNoise 함수에 인터페이스 IDuck을 구현하지 않은 클래스 RedheadDuck의 인스턴스를 인자로 전달하여도 에러 없이 처리된다.
makeNoise(new RedHeadDuck()); // q~uack!
