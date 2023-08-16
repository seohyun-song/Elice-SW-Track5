import { useEffect, useRef } from "react";

const App = () => {
	const target = useRef(null);
	const options = {
		threshold: 1.0,
	};
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			// 가시성의 변화가 있으면 관찰 대상 전체에 대한 콜백이 실행되므로,
			// 관찰 대상의 교차 상태가 false일(보이지 않는) 경우 실행하지 않음.
			if (!entry.isIntersecting) {
				return;
			}
			// 관찰 대상의 교차 상태가 true일(보이는) 경우 실행할 로직
			target.current.innerText = "관측되었습니다.";

			// 위 실행을 처리하고(1회) 관찰 중지
			observer.unobserve(entry.target);
		});
	}, options);

	useEffect(() => {
		// 대상 요소의 관찰을 시작
		observer.observe(target.current);
	}, []);

	return (
		<>
			<div style={{ height: "300vh", backgroundColor: "green" }} />
			<div
				style={{ height: "100px", backgroundColor: "red" }}
				ref={target}
			>
				target
			</div>
		</>
	);
};

export default App;
