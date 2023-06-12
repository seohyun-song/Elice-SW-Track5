// includes the Node.js http module
const http = require("http");

const hostname = "127.0.0.1";
// const port = 3000;

// http.createServer(): create a new HTTP server and returns it
// whenever a new request is recieved, the request event is called,
// providing two objects: req(http.IncommingMessage), res(http.ServerResponse)
// req -> provides the request details
// res -> return data to the caller
const server = http
	.createServer((req, res) => {
		// to indicate a successful response
		res.statusCode = 200;
		// set the Content-Type header
		res.setHeader("Content-Type", "text/plain");
		// close the response, adding the content as an argument to end()
		// 프로그래밍적으로 사용자에게 전송할 데이터를 생성한다.
		res.end("Hello World\n");
	})
	// the server is set to listen on the specified port and host name
	// when server is ready, the callback function is called
	.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}`);
	});
