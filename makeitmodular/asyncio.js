var mod = require('./modular');
mod(process.argv[2], process.argv[3], function (err, listf) {
    if (err) {
        console.log('Error!');
    } else {
        for (var i = 0; i < listf.length; i++) {
            console.log(listf[i]);
        }
    }
});
