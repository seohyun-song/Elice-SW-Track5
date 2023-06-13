// 콘솔환경에서 앱을 실행할 때 입력 값을 전달할수 있다.
// node conditional.js 1
// 이 전달된 입력값은 process.argv에 배열의 원소 값으로 저징된다.
// [
//     '/usr/local/bin/node',
//     '/Users/seohyun/git/Elice-SW-Track5/exercises/node-js/web-server/syntax/conditional.js',
//     '1'
// ]
const args = process.argv;
console.log(args[2]);
console.log("A");
console.log("B");

// 조건문에 의해 입력값에 따라 다르게 동작하도록 만들 수 있다.
if (args[2] === "1") {
	console.log("C1");
} else {
	console.log("C2");
}
console.log("D");
