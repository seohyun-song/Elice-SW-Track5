/*
	useAsync 커스텀 훅 만들어서 사용하기
	데이터를 요청할 때 마다 리듀서를 작성하는 것은 번거러운 일. 
	매번 반복되는 코를 작성하는 대신에 커스텀 훅을 만들어서 요청 상태 관리 로직을 쉽게 재사용

	커스텀훅 만드는 방법 
	- 보통 'use'라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성
	- 함수 안에서 useState, useEffect, useReducer, useCallback 등 Hooks를 사용하여 원하는 기능을 구현해주고, 
	- 컴포넌트에서 사용하고 싶은 값들을 반환
*/
import React, { useReducer, useEffect } from "react";

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

// Users 컴포넌트는 컴포넌트가 처음 렌더링 되는 시점부터 API 요청을 하고 있습니다.
// 특정 버튼을 눌렀을 때만 API를 요청하고 싶다면?
// useAsync의 세번째 파라미터에 skip을 넣어서 필요한 시점에만 요청할 수 있도록 합니다.
export default function useAsync(callback, deps = [], skip = false) {
	const [state, dispatch] = useReducer(reducer, {
		loading: false,
		data: null,
		error: false,
	});

	const fetchData = async () => {
		dispatch({ type: "LOADING" });
		try {
			const data = await callback();
			dispatch({ type: "SUCCESS", data });
		} catch (e) {
			dispatch({ type: "ERROR", error: e });
		}
	};

	useEffect(() => {
		if (skip) return;
		fetchData();
	}, deps);
	// 요청 관련 상태, fetchData 함수 반환
	// fetchData gkatn -> 데이터 쉽게 리로딩
	return [state, fetchData];
}
