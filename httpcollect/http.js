var http = require('http');
var url = process.argv[2];
var bl = require('bl');

http.get(url, function(res) {
  res.pipe(bl (function (err, data) {
    var totalData;
    totalData = data.toString();
    console.log(totalData.length);
    console.log(totalData);
  }));
});
