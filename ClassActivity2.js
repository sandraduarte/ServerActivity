//require/import the http module
var http = require("http");


//define a port we want to listen to
var PORT= 7000;

//a function that handles requests and sends responses
function handleRequest(request, response) {
	response.end("You're so pretty!");

}
var server = http.createServer(handleRequest);

//start the server7000
server.listen(PORT, function() {
	//callback triggered when server is successful
	console.log("Server listening on: http://localhost:%s", PORT);


});


var PORT2 = 7500;

function handleRequest2(request,response) {
	response.end("You suck");
	console.log('you suck');
}
var server2 = http.createServer(handleRequest2);

//start the server7500
server2.listen(PORT2, function() {
	//callback triggered when server is successful
	console.log("Server listening on: http://localhost:%s", PORT2);



});






//type localhost:8080 into web browser to see there

