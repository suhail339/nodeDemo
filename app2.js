var koa = require('koa');
var app = new koa();
var Promise = require('bluebird');


///////////////////Promise setup//////////////////////////
function testPromise(param){
    return Promise.resolve(param).then(function(result) {
        return result;
    });  
}


testPromise('world !!')
.then(function(finalResult){console.log("Hello " + finalResult)})
.error(function(e){console.log("Error handler " + e)})
.catch(function(e){console.log("Catch handler " + e)});
///////////////////Promise setup//////////////////////////

//////////////////////////next generation code with babel///////////////////////////
var testVar = [1, 2, 3].map(n => n + 1);
console.log('using babel ',testVar);
//////////////////////////next generation code with babel///////////////////////////

// x-response-time
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
  this.set('Warning', 'hello to response');

  this.cookies.set('custom_cookie', 'some dummy values to show');
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
//app.on('error', function(err,ctx){
//log.error('server error', err,ctx);
//});

app.listen(3000);
console.log("on 3000");