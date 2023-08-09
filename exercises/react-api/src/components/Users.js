import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
	/* useState : 요청 상태 관리 */
	const [users, setUsers] = useState(null); // 요청의 결과
	const [loading, setLoading] = useState(false); // 로딩 상태
	const [error, setError] = useState(null); // 에러

	// 버튼 눌러서 API 재요청하는 기능 구현하기 위해 fetchUsers 함수 useEffect 바깥으로 꺼내주었습니다.
	const fetchUsers = async () => {
		try {
			// 요청이 시작할 때는 error와 users 초기화
			setError(null);
			setUsers(null);

			// loading 상태를 true로 바꿉니다.
			setLoading(true);

			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/users"
			);
			setUsers(response.data);
		} catch (e) {
			setError(e);
		}
		setLoading(false);
	};
	/* useEffect(()=> {}, []): 컴포넌트가 마운트 됐을때 실행(첫 렌더링) */
	useEffect(() => {
		fetchUsers();
	}, []);

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
