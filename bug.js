const http = require('http');

const server = http.createServer((req, res) => {
  // Without proper error handling, unexpected errors can crash the server
  console.log(req.url);
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});