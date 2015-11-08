var sum = function(array) {


  var sum = 0;

  for(var i = 0; i < array.length; i++) {
    sum += Number(array[i]);

  }

  process.stdout.write(sum + '\n');
};

var array = [];

if (process.argv.length > 2) {

  for (var i = 2; i < process.argv.length; i++) {
    array.push(process.argv[i]);
  }
}


sum(array);
