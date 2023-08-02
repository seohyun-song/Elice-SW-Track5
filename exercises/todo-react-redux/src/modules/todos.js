/**
 * Ducks pattern
 * Action, Action creators, Reducer 한 곳에서 정리
 */
/* 액션 타입 선언 */
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

/* 액션 생성 함수 선언 */
let nextId = 1;
export const addTodo = (text) => ({
	type: ADD_TODO,
	todo: {
		id: nextId++,
		text,
		done: false,
	},
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id,
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id,
});

/* 초기 상태 선언 */
const initialState = [];

/* 리듀서 선언 */
export default function todos(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return state.concat(action.todo);
		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.id);
		case TOGGLE_TODO:
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, done: !todo.done } : todo
			);
		default:
			return state;
	}
}
