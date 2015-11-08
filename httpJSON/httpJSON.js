var http = require('http');
var port = process.argv[2];
var url = require('url');



var server = http.createServer(function(req, res){
  var urlObject = url.parse(req.url, true);

  if (urlObject.pathname == '/api/parsetime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var date = new Date(urlObject.query.iso);
    var response = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
    response = JSON.stringify(response);
    res.write(response);
    res.end();

  }

  if(urlObject.pathname == '/api/unixtime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var date2 = new Date(urlObject.query.iso);
    var response2 = {
      "unixtime": date2.getTime()
    };
    response2 = JSON.stringify(response2);
    res.write(response2);
    res.end();
  }

});

server.listen(port);
