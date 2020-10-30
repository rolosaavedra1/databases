exports.messages = require('./messages.js');
exports.users = require('./users.js');

let message = {
  id: 1,
  text: 'hello',
  userId: 'Me',
  roomId: 'Home',
  createdAt: '1000-01-01'
};

// exports.messages.create(message, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
// exports.users.getAll((err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });