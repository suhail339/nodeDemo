var koa = require('koa');
var app = new koa();
var fs = require('fs');

//////////////////////////file system///////////////////////////
var data = fs.readFileSync('index.txt', 'utf8');
// wait for the result, then use it
console.log("file system data ",data);
//////////////////////////file system///////////////////////////

// response
app.use(function *(){
  this.body = "Response";
  console.log(this);
});

app.listen(3000);
console.log("on 3000");