var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');


var personality_insights = new PersonalityInsightsV3({
 "username": "24560f02-bd84-4e45-bbbb-64ddeab48156-bluemix",
"password": "b1f654b03f4accf948feea816fe320894e5fbd77ddc2b1c5b1979a3707532f66",
"version_date": '2016-10-19'
});

personality_insights.profile({
  text: 'Enter more than 100 unique words here...',
  consumption_preferences: true
  },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});
 
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