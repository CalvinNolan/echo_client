const net = require('net');

// If no parameters are passed through, don't try to open the socket connection.
if (typeof(process.argv[2]) === 'undefined' || typeof(process.argv[3]) === 'undefined' || typeof(process.argv[4]) === 'undefined') {
  console.log("Invalid arguments! \nPlease include 'node script.js host-address port-number message' in that order.");
} else {
  // Create the socket connection
  const client = net.connect({port: process.argv[3], host: process.argv[2]});

  // When the connection is opened, send the GET request immediately.
  // The message is expected to be UTF-8 encoded.
  client.on('connect', function() {
      client.write("GET /?message=" + process.argv[4] + " HTTP/1.1\r\n\r\n");
  });

  // When a response is given to the GET request, output it and close the connection.
  client.on('data', (data) => {
    console.log(data.toString());
    client.end();
  });
}