var db = require('../db');
//TODO
module.exports = {
  getAll: function (callback) {
    db.query('select * from users', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  create: function (data, callback) {
    var now = new Date();
    var userQuery = 'INSERT IGNORE INTO users(id, createdAt) VALUES (?, ?);';
    db.query(userQuery, [data.username, now], (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
