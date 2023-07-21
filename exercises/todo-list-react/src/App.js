import React, { useState, useMemo } from "react";
import "./App.css";
import InsertForm from "./components/InsertForm";
import ListView from "./components/ListView";

function App() {
	const [todoList, setTodoList] = useState([]);
	const isLimitReached = useMemo(() => {
		return todoList.length >= 10;
	}, [todoList]);
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
			{isLimitReached && (
				<div
					style={{
						padding: "8px 16px",
						border: "1px solid #FA466A",
						backgroundColor: "#feecf0",
						color: "#FA466A",
						marginBottom: 16,
						marginTop: 16,
					}}
				>
					※ 할 일 목록이 너무 많습니다.
				</div>
			)}
			<InsertForm onInsert={handleInsert} disabled={isLimitReached} />
		</div>
	);
}

export default App;
