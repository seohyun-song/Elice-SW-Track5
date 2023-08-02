import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
	return (
		<li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
			<input type="checkbox" onChange={() => onToggle(todo.id)} />
			<span>{todo.text}</span>
			<button type="button" onClick={() => onDelete(todo.id)}>
				삭제
			</button>
		</li>
	);
};
export default TodoItem;
