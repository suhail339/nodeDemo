var koa = require('koa');
var app = koa();
var router = require('koa-router')();
 
router.get('User', function () {
console.log();
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

// x-response-time
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
  this.set('Warning', 'hello to response');
});

// logger
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function *(){
  this.body = "Response";
});

app.listen(3000);
console.log("on 3000");