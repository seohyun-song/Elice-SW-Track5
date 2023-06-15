type People = {
	name: string;
	age?: number;
};

const people = {} as People;
people.name = "Lee";
people.age = 20;
// people.address = "Seoul"; // Error
