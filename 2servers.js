// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORT_TWO = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL

  response.end("You rock!");

}

function handleOtherRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You suck!");
  }

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server_two = http.createServer(handleOtherRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


server_two.listen(PORT_TWO, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT_TWO);
  });
