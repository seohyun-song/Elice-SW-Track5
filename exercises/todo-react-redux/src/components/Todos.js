import React, { useState } from "react";
import TodoList from "./TodoList";

const Todos = ({ todos, onToggle, onCreate, onDelete }) => {
	// 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
	const [text, setText] = useState("");
	const onSubmit = (e) => {
		e.preventDefault();
		onCreate(text);
		setText("");
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={text} onChange={(e) => setText(e.target.value)} />
				<button type="submit">등록</button>
			</form>
			<TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
		</div>
	);
};
export default Todos;
