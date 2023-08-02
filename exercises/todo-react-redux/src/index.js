import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/**
 *  createStore로 작성시 취소선 -> not deprecated!
 *  RTK 쓰는 걸 권장 하기 위해
 * Switch to using the legacy_createStore API that is now exported, which is the exact same function but with no @deprecation tag. The simplest option is to do an aliased import rename
 * */
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
// 리덕스 스토어 생성
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

// 리액트 - 리덕스 연결
// Provider: Provider로 store 넣어서 App 감싸면 렌더딩하는 어떤 컴포넌트던지 리덕스 스토어에 접근가능
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
