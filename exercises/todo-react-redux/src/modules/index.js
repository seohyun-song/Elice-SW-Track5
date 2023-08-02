import { combineReducers } from "redux";
import todos from "./todos";
/**
 * combineReducers(reducers)
 * 헬퍼함수. 서로 다른 리듀싱 함수들을 값으로 가지는 객체를 받아서 createStore에 넘길 수 있는 하나의 리듀싱 함수로 바꿔줌
 * 상태 객체의 형태는 reducers로 전달된 키들을 따릅니다.
 */
const rootReducer = combineReducers({
	todos,
});
export default rootReducer;
