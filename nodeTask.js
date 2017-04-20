var koa = require('koa');
//var request = require('request');
//var sleep = require('thread-sleep');
//var rp = require('request-promise');
var requestSync = require('sync-request');
var schedule = require('node-schedule');
 //var fs = require('fs');
  //var data = fs.readFileSync('index.txt', 'utf8');
var demoModel = require('./dem.js');
var date = '12 09 * * *'; //seconds minutes hours day month year

console.log('Task is sceduled for : ',date);
var i = schedule.scheduleJob(date, function(){
	var macAd = demoModel.doThis();
	console.log(macAd.length);
	var options = {
	    json: true // Automatically parses the JSON string in the response 
			};
		for(var a = 0;a < macAd.length;a++){

			try{
					var res = requestSync('GET', 'https://api.macvendors.com/'+macAd[a],options);			
					console.log('Sync : mac address ',JSON.stringify(macAd[a]),' : ',JSON.stringify(res.getBody('utf8')));
			}
			catch(err){
					console.log('Sync : mac address ',JSON.stringify(macAd[a]),' : ',JSON.stringify(err.statusCode));
			}			
		}
});

/*
var i = schedule.scheduleJob(date, function(){

	var macAd = demoModel.doThis();

	console.log(macAd);

	for(var a = 0;a < macAd.length;a++){
	
	var options = {
	method: 'GET',
    uri: 'https://api.macvendors.com/'+macAd[a],
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response 
		};

	rp(options)
    .then(function (resp) {
        console.log('Promise : mac address ',JSON.stringify(macAd[a]),' : ',JSON.stringify(resp));
    })
    .catch(function (err) {
       console.log('Promise : mac address ',JSON.stringify(macAd[a]),' : ',JSON.stringify(err.response.body));
    });
	}

});

*/

/* cron style
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/

/*
for specific time
var date = new Date(2017, 11, 21, 5, 30, 0);
 
var j = schedule.scheduleJob(date, function(){
  console.log('something to someone');
});
*/

/*
var j = schedule.scheduleJob(date, function(){

	var macAd = demoModel.doThis();
	console.log(macAd.length);

	for(var a = 0;a < macAd.length;a++){
		request('https://api.macvendors.com/'+macAd[a], function (error, responseStatus, response) {
	 	console.log('Sync : mac address ',JSON.stringify(macAd[a]),' : ',JSON.stringify(response));
	});

	}

});
*/

