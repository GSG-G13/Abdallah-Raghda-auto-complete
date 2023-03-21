const http = require('http');
const server = http.createServer();
const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}.  Ready to accept requests!`);
});