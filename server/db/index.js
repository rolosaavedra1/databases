var mysql = require('mysql');
//TODO

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat',
  multipleStatements: true
});

db.connect(function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Connected!');
});


module.exports = db;