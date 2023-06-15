class ConstructorAccess {
	/* 
        접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 자동을 초기화된다. 
        public 으로 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다. 
    */
	constructor(public x: string) {}

	// public x:string;
	// constructor(x: string) {
	//     this.x = x;
	// }
}

const constructorAccess = new ConstructorAccess("hi");
console.log(constructorAccess.x);

class Local {
	// x는 생성자 내부에서만 유효한 지역 변수이다.
	// 클래스 프로퍼티 아니다
	constructor(x: string) {
		console.log(x);
	}
}

const local = new Local("hi");
console.log(local); // local {}
