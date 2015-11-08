var net = require('net');
var date = new Date();

var server = net.createServer(function (socket) {
  console.log('connection made');
  socket.write((date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + date.getDate() + ' ' + date.getHours() + ':0' + date.getMinutes()).toString());
  socket.end();
});
server.listen(process.argv[2]);


