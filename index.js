const http = require('http');

const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    const parsedRequestUrl = require('url').parse(request.url, true);

    if ((typeof(parsedRequestUrl.query) !== 'undefined') && (typeof(parsedRequestUrl.query.message) !== 'undefined')) {
      console.log(parsedRequestUrl.query.message);
      response.writeHead(200, { 'Content-Type': 'text/html'});
      response.write(parsedRequestUrl.query.message.toUpperCase() + "\\n");
    }
  }
  response.end();
});

server.listen(2000);