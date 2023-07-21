import React, { useState } from "react";
import "./App.css";
import InsertForm from "./components/InsertForm";
import ListView from "./components/ListView";

function App() {
	const [todoList, setTodoList] = useState([]);
	const handleInsert = (value) => {
		setTodoList((current) => {
			const newTodoList = [...current];
			newTodoList.push({
				key: new Date().getTime(),
				value,
				isCompleted: false,
			});
			return newTodoList;
		});
	};

	const handleComplete = (index) => {
		setTodoList((current) => {
			const newTodoList = [...current];
			newTodoList[index].isCompleted = true;
			return newTodoList;
		});
	};

	const handleRemove = (index) => {
		setTodoList((current) => {
			const newTodoList = [...current];
			newTodoList.splice(index, 1);
			return newTodoList;
		});
	};
	return (
		<div className="todo-list">
			<h2 className="title">To Do List</h2>
			<ListView
				todoList={todoList}
				onComplete={handleComplete}
				onRemove={handleRemove}
			/>
			<InsertForm onInsert={handleInsert} />
		</div>
	);
}

export default App;
