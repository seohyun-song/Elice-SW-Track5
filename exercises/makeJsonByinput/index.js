function makeJsonAndAlert(e) {
	// 새로고침방지(form 버튼은 기본 행위가 새로고침, 이 기본 행위를 막음)
	e.preventDefault();

	// 입력받은 값 가져오기
	const email = $email.value;
	const name = $name.value;
	const password = $password.value;

	// 객체데이터 만들기
	// 변수명과 키 명이 같으면 단축해서 사용가능
	// { email : email } -> { email }
	const data = {
		email,
		name,
		password,
	};

	// JSON 데이터 만들기
	const json = JSON.stringify(data);

	// alert 창 띄우기
	alert(json);
}

const $email = document.getElementById("inputEmail");
const $name = document.getElementById("inputName");
const $password = document.getElementById("inputPassword");
const $button = document.getElementById("buttonSubmit");

$button.addEventListener("click", makeJsonAndAlert);
