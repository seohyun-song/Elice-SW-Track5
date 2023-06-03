// 배열을 HTML 태그 요소로 변환
const makeAdultList = (humanData) => {
	let nameTags = "";
	let ageTags = "";
	humanData.forEach((human) => {
		if (human.age < 20) return;

		nameTags += `<li>${human.name}</li>`;
		ageTags += `<li>${human.age}</li>`;
	});

	return [nameTags, ageTags];
};

const makeChildList = (humanData) => {
	let nameTags = "";
	let ageTags = "";
	humanData.forEach((human) => {
		if (human.age >= 20) return;

		nameTags += `<li>${human.name}</li>`;
		ageTags += `<li>${human.age}</li>`;
	});

	return [nameTags, ageTags];
};

// 배열 정보
const inputExample = [
	{
		name: "제이슨",
		age: 12,
	},
	{
		name: "캐롤린",
		age: 5,
	},
	{
		name: "오바마",
		age: 30,
	},
	{
		name: "토르",
		age: 40,
	},
	{
		name: "아이언맨주니어",
		age: 12,
	},
	{
		name: "스파이더맨",
		age: 20,
	},
	{
		name: "알리사",
		age: 15,
	},
	{
		name: "나타샤",
		age: 35,
	},
	{
		name: "잭",
		age: 40,
	},
];

export { makeAdultList, makeChildList, inputExample };
