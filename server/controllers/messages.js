var models = require('../models');
//TODO
module.exports = {
  get: function (req, res) {
    //models.messages.getAll((err, results) =>
    //if(err) return error or console.log(err)
    //) else
    //maybe reshuffle results properties, create new messages object, pass that to res.end?
    //res.end(results);

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    //models.messages.create((err, results) =>
    //if err console.log(err)
    //else
    //res.end(true)
    //)
  } // a function which handles posting a message to the database
};
