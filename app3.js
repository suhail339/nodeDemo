var koa = require('koa');
var app = new koa();


// response
app.use(function *(){
  this.body = "Response";
});

app.listen(3000);
console.log("on 3000");