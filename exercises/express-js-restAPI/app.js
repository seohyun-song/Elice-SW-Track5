const express = require("express");

const notesRouter = require("./routes/notes");

const app = express();

// express.js는 기본적으로 HTTP body 에 전달되는 JSON데이터를 처리하지 못함
// express에서 기본적으로 제공해주는 express.json() 미들웨어를 사용해야 JSON 데이터를 사용할 수 있음
app.use(express.json());

app.use("/notes", notesRouter);

// 정의되지않은 라우팅에 404오류 처리하기
// 모든 라우팅이 적용된 이후&오류처리 미들웨어 이전
// express.js는 기본적인 404페이지를 가지고 있지만, 직접 처리가 필요한 경우 이와같은 핸들러 추가필요
app.use((req, res, next) => {
	res.status(404);
	res.send({
		result: "fail",
		error: `page not found ${req.path}`,
	});
});

// 오류처리 미들웨어
// 가장 마지막 미들웨어어로 오류 처리 미들웨어 적용하면
// 모든 라우팅에 공통적인 오류 처리 로직을 적용할 수 있음
app.use((err, req, res, next) => {
	res.status(500);
	res.json({
		result: "fail",
		error: err.message,
	});
});
