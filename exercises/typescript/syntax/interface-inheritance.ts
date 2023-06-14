interface Student {
	name: string;
	age?: number;
}

// 인터페이스 상속
interface StudentInfo extends Student {
	grade: number;
}

const student: StudentInfo = {
	name: "Lee",
	age: 20,
	grade: 3,
};

class Developer {
	constructor(public name: string, public age: number) {}
}

interface WebDeveloper extends Developer {
	skills: string[];
}

const developer: WebDeveloper = {
	name: "Kim",
	age: 20,
	skills: ["HTML", "CSS", "JavaScript"],
};
