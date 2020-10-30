var models = require('../models');
//TODO
module.exports = {
  get: function(req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        res.writeHead(404, 'Access-Control-Allow-Origin *');
        res.end(err);
      } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    models.messages.create(req.body, (err, results) => {
      if (err) {
        res.writeHead(404, 'Access-Control-Allow-Origin *');
        res.end(err);
      } else {
        res.writeHead(200, 'Access-Control-Allow-Origin *');
        res.end('true');
      }
    });
  } // a function which handles posting a message to the database
};
