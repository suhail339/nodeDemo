var assert = require('assert');
//var Promise = require('bluebird');
var https = require('https');

var request=require('request');

var response;
var stCode;

describe('User Mac Address Validation', function() {

beforeEach(function() {
  response = https.get('https://api.macvendors.com/24:df:6a:20:e2:3', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
  stCode = response.statusCode;
});
});

    it('check type of user', function() {
        //assert.equal(resp.statusCode,200);
        assert.equal(stCode,200);
    });

});

/*
var demoUser = require('./models/users');
describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new demoUser({        username    : 'Luna'
        , email     : 'luna@me.name'
        , password  : 'asdf123'
      });
      user.save(function(err){
        if (err) throw err;
        done();
      });
    })
  })
})
*/

//var a = [1,2,3,4];
//var b = [0,2,4,6];

//function User(name,fname,age) {
 // this.name = name;
 // this.fname = fname;
 // this.age = age;
//}

//beforeEach(function() {
//  console.log('Entering the test');
//});

//skipping test is best rather do nothing
//describe('arr', function() {
 // describe('matching', function() {
    // pending test below due to no call back function
    //it.skip('should be skipped', function() {
       // assert.equal(a[0],b[0]);
      //  });
 // });
//});

//success test
/*
describe('User', function() {
    var afi = new User('Afia', 'Suhail',3.5);
    var sheeba = new User('Nusaiba', 'Suhail',2);
      
    describe('sisters ?', function() {
        it('check if both users are sibs', function() {
        assert.equal(afi.fname,sheeba.fname);
    });
    it('check type of user', function() {
        assert.equal(typeof User,'function');
    });
            it('check type sheeba and aachi', function() {
        assert.equal(typeof afi && typeof sheeba,'object');
        });
    });
});
*/

//failed test
//describe('User', function() {
  //var afi = new User('Afia', 'Suhail',3.5);
   // var sheeba = new User('Nusaiba', 'Suhail',2);
      
   // describe('same ?', function() {
     //   it('check if both users are same', function() {
     //   assert.notEqual(afi.name,sheeba.name);
     //   });
   // });
 // });

//test for pending results
//describe('arr', function() {
 // describe('matching', function() {
    // pending test below due to no call back function
  //  it('should be pending'/*, function() {
       // assert.equal(a[0],b[0]);
  //  });
 // });
//});




///////////////////////////Promise///////////////////////////////

///////////////////////////Promise///////////////////////////////

/*describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
});

*/

/*
var mulsA = [[1,2,3]
            ,[4,5,6]
            ,[7,8,9]];

var counter = 0;
for(var i = 0; i < mulsA.length; i++) {
    var mulA = mulsA[i];
    for(var j = 0; j < mulA.length; j++) {
                  counter ++;
         //describe('matching', function() {
              // pending test below due to no call back function
           //   it('matched ?', function() {
                  //assert.equal(mulA[j],counter);
             //   });
          //});
          console.log(mulA[j] == counter);
    }
}
*/