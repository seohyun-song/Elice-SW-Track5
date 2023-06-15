// array: 배열
let list1: any[] = [1, false, "str"];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3]; // 제네릭 배열 타입

// tuple: 고정된 요소수 만큼의 타입을 미리 선언 후 배열을 표현
let tuple: [string, number] = ["hello", 10];
// error
// tuple = [10, "str"];
// tuple.push(true);

let coordinates: [x: number, y: number, z: number] = [1, 2, 3];

// enum: 열거형은 숫자값 집합에 이름을 지정한 것
enum Color1 {
	Red,
	Green,
	Blue,
}
let c1: Color1 = Color1.Green; // 1

enum Color2 {
	Red = 1,
	Green,
	Blue,
}
let c2: Color2 = Color2.Green; // 2

enum Color3 {
	Red = 1,
	Green = 2,
	Blue = 4,
}
let c3: Color3 = Color3.Blue; // 4

// any: 타입 추론을 할 수 없거나 타입 체크가 필요없는 변수에 사용
let notSure: any = 4;
notSure = false;

// voide: 일반적으로 함수에서 반환값이 없을 경우 사용
function warnUser(): void {
	console.log("Warning!");
}

// never: 결코 발생하지 않는 값 -> 항상 오류를 발생시키거나 종료되지 않는 함수
function infiniteLoop(): never {
	while (true) {}
}

function error(message: string): never {
	throw new Error(message);
}

let primitiveStr: string;
primitiveStr = "hi";
// primitiveStr = new String('Hello'); // error

// 객체 유형도 타입이 될 수 있다.
let objectStr: String;
objectStr = "hello";
objectStr = new String("hi");

const today: Date = new Date();
