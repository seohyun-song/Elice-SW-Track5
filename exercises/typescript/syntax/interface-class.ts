// 인터페이스 정의
interface ITodo {
	id: number;
	content: string;
	completed: boolean;
}

// CreateTodo 클래스는 ITodo 인터페이스를 구현해야한다.
class CreateTodo implements ITodo {
	/* 
        접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 자동을 초기화된다. 
        public 으로 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다. 
    */
	constructor(
		public id: number,
		public content: string,
		public completed: boolean
	) {}
}

const todo2 = new CreateTodo(1, "ts", false);
console.log(todo2);
