// 타입변환
// 타입이 있는 언어 들은 특정 타입이 변수값을 다른 타입의 값으로 변환할 수 있는 기능을 제공함
const $input = document.querySelector('input[type="text"]') as HTMLInputElement;
const val = $input.value;

const $input2 = <HTMLInputElement>document.querySelector('input[type="text"]');
const val2 = $input2.value;
