const fs = require('fs');

module.exports = {
    pwd:pwd,
    date:date,
    echo:echo,
    cat:cat,
    head:head,
    tail:tail
}

function pwd(nd,cb){    
    cb(process.cwd());
}

function date(nd,cb){
    cb(Date());
}

module.exports.ls = function(){
    fs.readdir('.', function(err, files) {
  if (err) throw err;
  files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
  })
  process.stdout.write("prompt > ");
});
}

function echo(n,cb){
    //cb(Array.prototype.join("  "));
    cb(Array.prototype.join(" "));
}

function cat(arr,cb){
fs.readFile(arr[0],'utf8',function(err,data){
  if(err){console.log(err);}
  else{
      cb(data);
  }
})

}

function head(){

}

function tail(){

}
