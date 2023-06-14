// 인터페이스의 프로퍼티는 반드시 구현되어야 한다.
// 선택적으로 생략해도 되는 프로퍼티에 프로퍼티명 뒤에 ?를 붙인다.
interface UseInfo {
	username: string;
	password: string;
	age?: number;
	address?: string;
}

// 선택적 프로퍼티는 구현하지 않아도 에러가 발생하지 않는다.
const userInfo: UseInfo = {
	username: "Lee",
	password: "1234",
};

console.log(userInfo);
