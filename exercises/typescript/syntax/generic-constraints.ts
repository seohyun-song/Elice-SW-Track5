// 여러 타입을 처리할 수 있는 generic 함수
// generic T의 타입으로 특정 타입만 가능하도록 제약 조건을 추가 할 수 있음
function add2<T extends number | string | boolean>(a: T, b: T): T {
	if (typeof a === "number" && typeof b === "number") return (a + b) as T;
	else if (typeof a === "string" && typeof b === "string")
		return (a + b) as T;
	else if (typeof a === "boolean" && typeof b === "boolean")
		return (a || b) as T;
	else throw new Error();
}
