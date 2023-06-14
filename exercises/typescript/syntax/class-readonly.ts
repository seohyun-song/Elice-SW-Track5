class ReadonlyProperty {
	// readonly 가 선언된 클래스 프로퍼티는  선언시
	private readonly MAX_LEN: number = 5;
	private readonly MSG: string;

	constructor() {
		// 생성자 내부에서만 값 할당 가능
		this.MSG = "hello";
	}

	log() {
		// readonly 선언된 프로퍼티는 재할당이 금지
		// this.MAX_LEN = 10;
		// this.MSG = 'hi';
		console.log(`MAX_LEN: ${this.MAX_LEN}`);
		console.log(`MSG: ${this.MSG}`);
	}
}

new ReadonlyProperty().log();
