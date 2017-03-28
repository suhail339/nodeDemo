var assert = require('assert');

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

var a = [1,2,3,4];
var b = [0,2,4,6];

function User(name,fname,age) {
  this.name = name;
  this.fname = fname;
  this.age = age;
}

//beforeEach(function() {
//  console.log('Entering the test');
//});

//skipping test is best rather do nothing
describe('arr', function() {
  describe('matching', function() {
    // pending test below due to no call back function
    it.skip('should be skipped', function() {
        assert.equal(a[0],b[0]);
        });
  });
});

//success test
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

//failed test
describe('User', function() {
  var afi = new User('Afia', 'Suhail',3.5);
    var sheeba = new User('Nusaiba', 'Suhail',2);
      
    describe('same ?', function() {
        it('check if both users are same', function() {
        assert.equal(afi.name,sheeba.name);
        });
    });
  });

//test for pending results
describe('arr', function() {
  describe('matching', function() {
    // pending test below due to no call back function
    it('should be pending'/*, function() {
        assert.equal(a[0],b[0]);
    }*/);
  });
});

//////////////////////////////////////////////////////////

/*describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
});*/
