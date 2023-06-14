// 함수의 파라미터와 리턴의 타입을 정의
interface SquareFunc {
	(num: number): number;
}

const squareFunc: SquareFunc = function (num: number) {
	return num * num;
};

console.log(squareFunc(10)); // 100
