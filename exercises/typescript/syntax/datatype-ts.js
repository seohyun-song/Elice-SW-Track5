"use strict";
// array: 배열
let list1 = [1, false, "str"];
let list2 = [1, 2, 3];
let list3 = [1, 2, 3]; // 제네릭 배열 타입
// tuple: 고정된 요소수 만큼의 타입을 미리 선언 후 배열을 표현
let tuple = ["hello", 10];
// error
// tuple = [10, "str"];
// tuple.push(true);
// enum: 열거형은 숫자값 집합에 이름을 지정한 것
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color1.Green; // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green; // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
let c3 = Color3.Blue; // 4
// any: 타입 추론을 할 수 없거나 타입 체크가 필요없는 변수에 사용
let notSure = 4;
notSure = false;
// voide: 일반적으로 함수에서 반환값이 없을 경우 사용
function warnUser() {
    console.log("Warning!");
}
// never: 결코 발생하지 않는 값 -> 항상 오류를 발생시키거나 종료되지 않는 함수
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
let primitiveStr;
primitiveStr = "hi";
// primitiveStr = new String('Hello'); // error
// 객체 유형도 타입이 될 수 있다.
let objectStr;
objectStr = "hello";
objectStr = new String("hi");
const today = new Date();
