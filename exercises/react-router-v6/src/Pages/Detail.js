import React from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
	const nav = useNavigate();
	const handleClick = () => {
		nav("/");
	};
	return (
		<div>
			<h1>Detail</h1>
			<p>상세 페이지 입니다.</p>
			<button onClick={handleClick}>홈으로 이동</button>
		</div>
	);
};

export default Detail;
