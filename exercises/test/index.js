const foo = async () => {
	try {
		const response = await fetch("https://wrong.url");
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

foo();
