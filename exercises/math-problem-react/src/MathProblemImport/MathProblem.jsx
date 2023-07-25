import React, { useState, useEffect } from "react";
import "./MathProblem.css";

const GameStatus = {
	CORRECT: "correct",
	INCORRECT: "incorrect",
	READY: "ready",
};

const generateRandomNumber = () => {
	return Math.floor(Math.random() * 100) + 1;
};

const MathProblem = () => {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [gameStatus, setGameStatus] = useState(GameStatus.READY);
	const [answer, setAnswer] = useState(0);

	const generateProblem = () => {
		setGameStatus(GameStatus.READY);
		setNum1(generateRandomNumber());
		setNum2(generateRandomNumber());
		setAnswer("");
	};

	const handleSubmit = () => {
		const originalAnswer = num1 + num2;
		originalAnswer === answer
			? setGameStatus(GameStatus.CORRECT)
			: setGameStatus(GameStatus.INCORRECT);
	};

	const handleAnswerInput = (e) => {
		setAnswer(Number(e.target.value));
	};

	useEffect(() => {
		generateProblem();
	}, []);

	return (
		<>
			<h1 className="title">덧셈 배우기</h1>
			<div className="problem">
				<span>{num1}</span>
				<span>+</span>
				<span>{num2}</span>
			</div>

			<div className="input-box">
				<div className="equal">=</div>
				<input
					type="number"
					id="answer"
					className="input"
					name="answer"
					onChange={handleAnswerInput}
					value={answer}
				/>
				<button className="btn-submit" onClick={handleSubmit}>
					제출
				</button>
			</div>

			<div className="result">
				{gameStatus === GameStatus.CORRECT
					? "정답입니다"
					: gameStatus === GameStatus.INCORRECT
					? "오답입니다"
					: ""}
			</div>
			{gameStatus === GameStatus.CORRECT && (
				<div>
					<button
						className="btn-generate-problem"
						onClick={generateProblem}
					>
						문제 생성
					</button>
				</div>
			)}
		</>
	);
};

export default MathProblem;
