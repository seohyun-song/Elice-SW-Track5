import { create, createReportList } from "./modules/canvas.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import randomSquare from "./modules/square.js";

// canvas 만들기
let myCanvas = create("myCanvas", document.body, 480, 320);

// canvas 정보 목록 만들기
let reportList = createReportList(myCanvas.id);

// square그리기
let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");

// anvas 정보 내용 작성하기
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// random square 그리기
let square2 = randomSquare(myCanvas.ctx);
