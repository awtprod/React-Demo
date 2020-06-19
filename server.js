const http = require('http');

const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from change');
});

server.listen(port, () => {
    console.log(`Server running at ${port}/`);
});