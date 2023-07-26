import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	// <Link>사용하지 않고 useNavigate를 사용하여 버튼으로 다른 페이지 이동 구현
	const nav = useNavigate();
	const handleClick = () => {
		nav("/list");
	};
	return (
		<div>
			<h1>Home</h1>
			<button onClick={handleClick}>리스트로 이동</button>
		</div>
	);
};

export default Home;
