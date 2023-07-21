import React, { useState } from "react";

const InsertForm = ({ onInsert }) => {
	const [inputValue, setInputValue] = useState("");
	//   const handleChangeTodo = event => {
	//     setInputValue(event.target.value);
	//   };
	const handleSubmit = (event) => {
		event.preventDefault();
		if (typeof onInsert === "function") {
			// 존재하면서 타입이 함수여야 호출한다.
			onInsert(inputValue);
		}
		setInputValue("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
			/>
			<button type="submit">등록</button>
		</form>
	);
};

export default InsertForm;
