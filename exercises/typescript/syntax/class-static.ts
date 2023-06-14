// ES6의 static은 타입스크립트에서도 사용가능하다.
// static members 는 클래스 이름으로만 접근 가능
class Circle {
	static pi: number = Math.PI;
	static getArea(radius: number) {
		return this.pi * radius * radius;
	}
}

Circle.getArea(5);
