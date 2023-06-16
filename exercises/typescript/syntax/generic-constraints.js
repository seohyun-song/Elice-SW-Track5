"use strict";
// 여러 타입을 처리할 수 있는 generic 함수
// generic T의 타입으로 특정 타입만 가능하도록 제약 조건을 추가 할 수 있음
function add2(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return (a + b);
    else if (typeof a === "string" && typeof b === "string")
        return (a + b);
    else if (typeof a === "boolean" && typeof b === "boolean")
        return (a || b);
    else
        throw new Error();
}
