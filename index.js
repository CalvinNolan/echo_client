const net = require('net');

const server = net.createServer((c) => {
  c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen(2000, () => {
  console.log('Server Running on port 2000');
});