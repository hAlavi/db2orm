var DataSource = require('../index').DS.DataSource;
var DB2 = require('../index').db2connector;

var config = {
  username: 'username',
  password: 'password',
  hostname: 'localhost',
  port: 50000,
  database: 'db',
  schema: 'schema'
};


var db = new DataSource(DB2, config);


var User = db.define('User', {
  name: { type: String, length:25 },
  email: { type: String },
});


db.autoupdate('User', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  
  User.create({
    name: 'Tony',
    email: 'tony@t.com',
  }, function(err, user) {
    console.log(err, user);
  });

 
  User.find({
    where: { and: [{
      name: 'Tony' ,
      email: 'tony@t.com'}]
    }
  }, function (err, users) {
    console.log(err, users);
  });
    
  User.destroyAll(function() {
    console.log('example complete');
  });

});
