
const command = require('./command.js');
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(" "); // remove the newline

  process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');

  var callback = function(str){
    process.stdout.write(str);
  }
  command[cmd[0]](cmd.slice(1),callback);
});











