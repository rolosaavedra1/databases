var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('select * from messages', (err, result) => {
      if (err) {
        callback(err);
      } else {
        //for testing purposes, delete
        console.log('output of model.getAll', result);
        callback(null, result);
      }
    });
  },
  create: function (data, callback) {
    console.log(data);

    var queryString = 'INSERT INTO messages(text, user_id, room_id, created_at) values("' + data.text + '", "' + data.user_id + '", "' + data.room_id + '", ' + data.created_at + ');';

    console.log(queryString);
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        //for testing purposes, delete
        console.log('output from model.create', result);
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
/* id int(16) NOT NULL AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  user_id VARCHAR(200),
  room_id VARCHAR(200),
  created_at date, */