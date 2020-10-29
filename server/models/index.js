exports.messages = require('./messages.js');
exports.users = require('./users.js');

let message = {
  id: 1,
  text: 'hello',
  user_id: 'Me',
  room_id: 'home',
  created_at: '1000-01-01'
};

exports.messages.create(message, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
exports.messages.getAll((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});