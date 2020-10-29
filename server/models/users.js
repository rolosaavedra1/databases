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
    var userQuery = `INSERT IGNORE INTO
    users(id, createdAt)
    values("` + data.userId + `", "` + data.createdAt + `");`;
    db.query(userQuery, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
