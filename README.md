# echo_client
An echo client written in NodeJS using raw sockets.

# Installation
Follow the instructions at <a href="https://nodejs.org/en/download/">nodejs.org</a> to download and install NodeJS to be able to run the Echo Client.

# Running the Client
After nstalling NodeJS and cloning the repo follow these steps.
<br /><br />
`cd  echo_client`
<br />
`node echoClient.js hostname port-number path message`

This will open a socket with the specified hostname, port number and path and send it a GET request with the url parameter message set as the input message to the script.

