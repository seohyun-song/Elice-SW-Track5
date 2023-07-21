import React, { useState } from "react";
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
	return (
		<div className="App">
			<ListView todoList={todoList} />
			<InsertForm onInsert={handleInsert} />
		</div>
	);
}

export default App;
