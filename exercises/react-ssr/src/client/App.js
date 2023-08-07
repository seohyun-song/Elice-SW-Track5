import React, { useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);
	const decreaseClick = () => {
		setCount((prev) => prev - 1);
	};
	const increaseClick = () => {
		setCount((prev) => prev + 1);
	};
	return (
		<div>
			<div>Count: {count}</div>
			<div>
				<button onClick={decreaseClick}>Decrease</button>
				<button onClick={increaseClick}>Increase</button>
			</div>
		</div>
	);
}
