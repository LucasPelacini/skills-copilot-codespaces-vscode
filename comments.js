// Create web server
// Create a web server that listens to incoming requests on port 3000. When a request is received, the server should respond with a status code of 200 and the following JSON object:
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ message: 'Hello, world!' }));
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('Server is listening on localhost:3000');
});
// Run the web server
// Run the web server using the following command:
// node comments.js
// Open your web browser and navigate to http://localhost:3000. You should see the following JSON object:
// { "message": "Hello



