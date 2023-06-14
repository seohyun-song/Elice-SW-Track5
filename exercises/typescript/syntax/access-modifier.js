"use strict";
class Access {
    constructor(x, y, z) {
        // 클래스 내부 -> public, protected, private 접근 제한자 모두 참조가능
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
// 인스턴스 생성
const access = new Access("x", "y", "z");
// public 접근제한자는 인스턴스를 통해 클래스 외부 참조 가능
console.log(access.x);
// protected, private -> 인스턴스를 통해 클래스 외부 참조 불가능
// console.log(access.y);
// console.log(access.z);
class ChildAcess extends Access {
    constructor(x, y, z) {
        super(x, y, z);
        // public, protected -> 자식 클래스 내부에서 참조 가능
        console.log(this.x);
        console.log(this.y);
        // private -> 자식 클래스 내부에서 참조 불가능
        // console.log(this.z);
    }
}
