const http = require('http');

const hostname: string = 'localhost';
const port: number = 8000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello, World.');
});

server.listen(port, hostname, () => {
	console.log(`Server listening at https://${hostname}:${port}/`);
});
