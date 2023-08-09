import React, { useEffect, useReducer } from "react";
import axios from "axios";

/* 리듀서 */
// useState의 setState 함수를 여러 번 사용하지 않아도 된다.
// 리듀서 로직을 분리했으므로 다른곳에 쉽게 재사용 할 수 있다.
function reducer(state, action) {
	switch (action.type) {
		case "LOADING":
			return {
				loading: true,
				data: null,
				error: null,
			};
		case "SUCCESS":
			return {
				loading: false,
				data: action.data,
				error: null,
			};
		case "ERROR":
			return {
				loading: false,
				data: null,
				error: action.error,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

export default function Users() {
	/* useReducer :  상태 업데이트 로직 분리 */
	const [state, dispatch] = useReducer(reducer, {
		loading: false,
		data: null,
		error: null,
	});

	const fetchUsers = async () => {
		dispatch({ type: "LOADING" });
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			dispatch({ type: "SUCCESS", data: response.data });
		} catch (e) {
			dispatch({ type: "ERROR", error: e });
		}
	};

	/* useEffect(()=> {}, []): 컴포넌트가 마운트 됐을때 실행(첫 렌더링) */
	useEffect(() => {
		fetchUsers();
	}, []);

	const { loading, data: users, error } = state;

	if (loading) return <div>로딩중 ..</div>;
	if (error) return <div>에러가 발생했습니다.</div>;
	if (!users) return null;
	return (
		<>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.username} ({user.name})
					</li>
				))}
			</ul>
			<button onClick={fetchUsers}>다시 불러오기</button>
		</>
	);
}
