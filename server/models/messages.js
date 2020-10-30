var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('select * from messages', (err, result) => {
      if (err) {
        callback(err);
      } else {
        console.log(result);
        callback(null, result);
      }
    });
  },
  create: function (data, callback) {
    console.log(data);
    // INSERT DATA.ROOM INSERT DATA.USER
    var userQuery = `INSERT IGNORE INTO
    users(id, createdAt)
    values(?, ?);
    `;

    var roomsQuery = `INSERT IGNORE INTO
    rooms(id, createdAt)
    values(?, ?);
    `;

    var messagesQuery = `INSERT INTO
    messages(text, userId, roomId, createdAt)
    values(?, ?, ?, ?);
    `;
    var currentDate = new Date().toJSON().slice(0, 10);
    db.query(
      userQuery + roomsQuery + messagesQuery + 'SHOW WARNINGS',
      [data.username, data.createdAt, data.roomname, data.createdAt, data.message, data.username, data.roomname, currentDate],
      (err, result) => {
        console.log(result);
        console.log([data.message, data.username, data.roomname, currentDate]);
        if (err) {
          callback(err);
        } else {
          callback(null, result);
        }
      });
  }
};