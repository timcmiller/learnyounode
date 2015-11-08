var fs = require('fs');
var ph= require('path');
module.exports = function (path, ext, callbk) {
var pathio = "." + ext;
    fs.readdir(path, function (err, files) {
        if (err)
            return callbk(err);
        else {
            var listf = []; //listf is the resultant list
            for (var i = 0; i < files.length; i++) {
                if (ph.extname(files[i]) === pathio) {
                    listf.push(files[i]);
                }
 }
            callbk(null, listf);
     }

    });
};
