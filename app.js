var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = '';
});

app.listen(3000);
console.log("on 3000");