var express = require('express');
var app = express();
var path = require("path")
var port = 80;
let newPath = path.join(__dirname+"/build")

app.use(express.static(newPath));
app.get('*', function(req, res) {
    res.sendFile(newPath + '/index.html');
});
app.listen(port,()=>{
    console.log("changes")
});

const newApp = express()

let newPathToPlatform = path.join(__dirname+"../../../Platform/platform-ui/build");
newApp.use(express.static(newPathToPlatform));
newApp.get('*', function(req, res) {
    res.sendFile(newPathToPlatform + '/index.html');
});
newApp.listen(4000,()=>{
    console.log("changes 4000")
});


// var http = require('http');

// http.createServer(onRequest).listen(80);

// function onRequest(client_req, client_res) {
//   console.log('serve: ' + client_req.url);

//   var options = {
//     hostname: 'localhost',
//     port: 3000,
//     path: client_req.url,
//     method: client_req.method,
//     headers: client_req.headers
//   };

//   var proxy = http.request(options, function (res) {
//     client_res.writeHead(res.statusCode, res.headers)
//     res.pipe(client_res, {
//       end: true
//     });
//   });

//   client_req.pipe(proxy, {
//     end: true
//   });
// }