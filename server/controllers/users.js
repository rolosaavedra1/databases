var models = require('../models');
//TODO
module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
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
    console.log('Are we like...? posting bro?');
    models.users.create(req.body, (err, results) => {
      if (err) {
        res.writeHead(404, 'Access-Control-Allow-Origin *');
        res.end(err);
      } else {
        console.log(req.data);
        res.writeHead(200, 'Access-Control-Allow-Origin *');
        res.end(JSON.stringify('true'));
      }
    });
  }
};
