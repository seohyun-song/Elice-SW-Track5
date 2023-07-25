import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
			<Title>덧셈 배우기</Title>
			<Problem>
				<span>{num1}</span>
				<span>+</span>
				<span>{num2}</span>
			</Problem>

			<InputBox>
				<Equal>=</Equal>
				<Input
					type="number"
					id="answer"
					name="answer"
					onChange={handleAnswerInput}
					value={answer}
				/>
				<BtnSubmit onClick={handleSubmit}>제출</BtnSubmit>
			</InputBox>

			<Result>
				{gameStatus === GameStatus.CORRECT
					? "정답입니다"
					: gameStatus === GameStatus.INCORRECT
					? "오답입니다"
					: ""}
			</Result>
			{gameStatus === GameStatus.CORRECT && (
				<div>
					<BtnGenerateProblem onClick={generateProblem}>
						문제 생성
					</BtnGenerateProblem>
				</div>
			)}
		</>
	);
};

export default MathProblem;

const Title = styled.h1`
	text-align: center;
	font-size: 24px;
`;

const Problem = styled.div`
	display: flex;
	justify-content: center;
	font-size: 36px;
	font-weight: 900;
	gap: 10px;
	padding: 20px 0;

	& > span:first-child {
		color: #0079ff;
	}

	& > span:nth-child(2) {
		color: #ff0060;
	}

	& > span:last-child {
		color: #00dfa2;
	}
`;

const InputBox = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Equal = styled.div`
	font-weight: 900;
	color: #ff0060;
`;

const Input = styled.input`
	flex: 1;
	height: 40px;
	padding: 0 10px;
	border-radius: 10px;
	border: 2px dashed #00dfa2;
	box-sizing: border-box;

	outline: none;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		appearance: none;
		margin: 0;
	}
`;

const BtnSubmit = styled.button`
	flex: none;
	height: 40px;
	padding: 0 10px;
	border-radius: 10px;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	background-color: #00dfa2;
	border: none;
	outline: none;
	cursor: pointer;
`;

const Result = styled.div`
	margin: 10px 0;
	font-size: 12px;
`;

const BtnGenerateProblem = styled.button`
	width: 100%;
	height: 40px;
	margin-top: 40px;
	padding: 0 10px;
	border: none;
	border-radius: 6px;
	box-sizing: border-box;
	background: #0079ff;
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	cursor: pointer;
`;
