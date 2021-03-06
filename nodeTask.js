var koa = require('koa'),
co = require('co'),
monk = require('monk'),
wrap = require('co-monk'),
Promise = require('bluebird');
var requestSync = require('sync-request');
var schedule = require('node-schedule');
var userModel = require('./../models/user');

var sch_Date = '58 12 * * *'; //seconds minutes hours day month year || more detail is at the end of the file

var skipArg = process.argv[2];
var limitArg = process.argv[3];

//set default values
if(!limitArg || !skipArg){
    console.log('\x1b[32m','Both skip and limit parameters are expected');
    console.log('\x1b[33m','e.g: node scripts/MacValidate 10 10');
    process.exit();
}
else{

    limitArg = parseInt(limitArg);
    skipArg = parseInt(skipArg);

    if(isNaN(limitArg) || isNaN(skipArg)){
        console.log('\x1b[32m','parameters are integers');
        process.exit();
    }
}

console.log(' skip : ',skipArg,' limit : ',limitArg);

var records;

co.wrap(function *(){

records = yield userModel.checkMac(limitArg,skipArg); //take records for only having no isFishy field

var i = schedule.scheduleJob(sch_Date, function(){

	console.log('record length : ',records.length);

	var options = {
	    json: true //Automatically parses the JSON string in the response 
			};
		for(var a = 0;a < records.length;a++){

			try{
					var res = requestSync('GET', 'https://api.macvendors.com/'+records[a].macAddress,options);
                    console.log('Sync : mac address ',JSON.stringify(records[a].macAddress),' : ',JSON.stringify(res.getBody('utf8')));
                    records[a].varMac = records[a].macAddress;
                    records[a].isFishy = false;
                    records[a].vendor = res.getBody('utf8');
			}
			catch(err){
                    console.log('Sync : mac address ',JSON.stringify(records[a].macAddress),' : ',err.statusCode);

                    records[a].varMac = records[a].macAddress;
                    records[a].isFishy = true;
                    records[a].vendor = err.statusCode;
			}
		}
            console.log('///////////////////////////////');
			console.log('Complete Result ',records);

            console.log("*****************Process Ended*****************");
            process.exit();

			//user records updation code goes here

});
})()
    .then(function () {
        console.log("Task is scheduled for ",sch_Date);
    });

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

//for specific time
var sch_Date = new sch_Date(2017, 11, 21, 5, 30, 0);
 
var j = schedule.scheduleJob(sch_Date, function(){
  console.log('something to someone');
});
*/