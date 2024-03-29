import React from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
	const nav = useNavigate();
	const handleClick = () => {
		nav("/detail");
	};
	return (
		<div>
			<h1>List</h1>
			<p>리스트 페이지입니다.</p>
			<button onClick={handleClick}>디테일로 이동</button>
		</div>
	);
};

export default List;
