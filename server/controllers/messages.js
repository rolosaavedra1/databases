var models = require('../models');
//TODO
module.exports = {
  get: function(req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        res.writeHead(404, 'Access-Control-Allow-Origin *');
        res.end(err);
      } else {
        res.writeHead(200, 'Access-Control-Allow-Origin *');
        res.end(JSON.stringify(results));
      }
    });
  },
  post: function (req, res) {
    models.messages.create(req.data, (err, results) => {
      if (err) {
        res.writeHead(404, 'Access-Control-Allow-Origin *');
        res.end(err);
      } else {
        res.writeHead(200, 'Access-Control-Allow-Origin *');
        res.end(JSON.stringify('true'));
      }
    });
  } // a function which handles posting a message to the database
};
