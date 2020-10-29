var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('select * from messages', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  create: function (data, callback) {
    console.log(data);
    // INSERT DATA.ROOM INSERT DATA.USER
    var userQuery = `INSERT IGNORE INTO
    users(id, createdAt)
    values("` + data.userId + `", "` + data.createdAt + `");`;

    var roomsQuery = `INSERT IGNORE INTO
    rooms(id, createdAt)
    values("` + data.roomId + `", "` + data.createdAt + `");`;

    var messagesQuery = `INSERT INTO
    messages(text, userId, roomId, createdAt)
    values("` + data.text + `", "` + data.userId + `", "` + data.roomId + `", "` + data.createdAt + `");`;

    var queries = [userQuery, roomsQuery, messagesQuery];

    queries.forEach(queryString => {
      db.query(queryString, (err, result) => {
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
    });
  }
};