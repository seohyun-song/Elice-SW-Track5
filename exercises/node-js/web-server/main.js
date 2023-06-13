const http = require("http");
const fs = require("fs");
const url = require("url");

const app = http.createServer((request, response) => {
	let _url = request.url;
	const queryData = url.parse(_url, true).query;
	const pathname = url.parse(_url, true).pathname;
	let title = queryData.id;
	console.log(url.parse(_url, true));
	if (pathname === "/") {
		fs.readFile(`data/${title}`, "utf8", (err, data) => {
			const desc = data;
			const template = `
		<!doctype html>
	<html>
	<head>
	  <title>WEB1 - ${title}</title>
	  <meta charset="utf-8">
	</head>
	<body>
	  <h1><a href="/">WEB</a></h1>
	  <ol>
		<li><a href="/?id=HTML">HTML</a></li>
		<li><a href="/?id=CSS">CSS</a></li>
		<li><a href="/?id=JavaScript">JavaScript</a></li>
	  </ol>
	  <h2>${title}</h2>
	  <p>${desc}</p>
	</body>
	</html>
	
		`;
			response.writeHead(200);
			response.end(template);
		});
	} else {
		response.writeHead(404); // not found
		response.end("Not found");
	}
});
app.listen(3000);
