var koa = require('koa');
var app = new koa();
var router = require('koa-router')();

router.get('User', function () {
console.log();
});

// response
app.use(function *(){
  this.body = "Response";
});

app.listen(3000);
console.log("on 3000");