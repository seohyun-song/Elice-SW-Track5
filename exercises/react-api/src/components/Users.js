import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
	/* useState : 요청 상태 관리 */
	const [users, setUsers] = useState(null); // 요청의 결과
	const [loading, setLoading] = useState(false); // 로딩 상태
	const [error, setError] = useState(null); // 에러

	/* useEffect(()=> {}, []): 컴포넌트가 마운트 됐을때 실행(첫 렌더링) */
	// useEffect에 첫 번째 파라미터로 등록하는 함수에는 async를 사용할 수 없기 때문에
	// async를 사용하는 새로운 함수를 선언해주어야 합니다.
	useEffect(() => {
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
		fetchUsers();
	}, []);

	if (loading) return <div>로딩중 ..</div>;
	if (error) return <div>에러가 발생했습니다.</div>;
	if (!users) return null;
	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>
					{user.username} ({user.name})
				</li>
			))}
		</ul>
	);
}
