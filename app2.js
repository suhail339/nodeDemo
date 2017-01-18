var koa = require('koa');
var app = new koa();

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
  console.log(this);
});

//error event listner
app.on('error', function(err,ctx){
log.error('server error', err,ctx);
});

app.listen(3000);
console.log("on 3000");