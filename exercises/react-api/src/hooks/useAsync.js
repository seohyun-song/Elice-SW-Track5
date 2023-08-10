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
/**
 *
 * @param {function} callback
 * @param {array} deps
 * @returns
 */
export default function useAsync(callback, deps = []) {
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
		fetchData();
	}, deps);
	// 요청 관련 상태, fetchData 함수 반환
	// fetchData gkatn -> 데이터 쉽게 리로딩
	return [state, fetchData];
}
