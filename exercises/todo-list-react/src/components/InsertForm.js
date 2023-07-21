import React, { useState, useCallback } from "react";

const InsertForm = ({ onInsert }) => {
	const [inputValue, setInputValue] = useState("");
	// 컴포넌트가 재렌더링 될 때 불필요하게 함수가 다시 생성되는 것을 방지,
	// deps로 설정한 값이 변경될 때만 수행
	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();

			// onInsert가 정상적인 함수인지 확인하여 에러 방지
			// input값이 null 일떼 함수 실행할 필요없음
			if (typeof onInsert === "function" && inputValue) {
				onInsert(inputValue);
			}
			setInputValue("");
		},
		[onInsert, inputValue]
	);
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
