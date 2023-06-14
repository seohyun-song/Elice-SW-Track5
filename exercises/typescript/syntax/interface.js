"use strict";
// 변수 todo의 타입으로 Todo 인터페이스를 선언
// 인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제한다.
let todo;
// 변수 todo는 Todo 인터페이스를 준수하여야 한다. 마치 새로운 타입 Todo를 따르는 것과 같음
todo = { id: 1, content: "ts", isCompleted: false };
let todos = [];
// 함수 파라미터의 타입으로 인터페이스 선언
// 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달하여야 한다.
// 함수에 객체를 전달 할 때, 복잡한 매개변수 체크가 없어서 유용
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: "html", isCompleted: true };
addTodo(newTodo);
