import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, deleteTodo, toggleTodo } from "../modules/todos";

const TodosContainer = () => {
	// useSelector() 리덕스 스토어의 상태를 조회하는 훅
	const todos = useSelector((state) => state.todos);
	// useDispatch() 리덕스 dispatch 함수 사용할 수 있도록 해주는 훅
	const dispatch = useDispatch();

	// dispatch(action): 액션 발생
	const onCreate = (text) => dispatch(addTodo(text));
	const onDelete = (id) => dispatch(deleteTodo(id));
	const onToggle = (id) => dispatch(toggleTodo(id));

	// 상태와 액션을 디스패치하는 함수들을 props 로 넣어줌
	return (
		<Todos
			todos={todos}
			onCreate={onCreate}
			onToggle={onToggle}
			onDelete={onDelete}
		/>
	);
};
export default TodosContainer;
