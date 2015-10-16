var Promise = require('bluebird'),
  request = require('request');

exports.request = function(options) {
  return new Promise(function(resolve, reject) {

    request(options, function(err, res, body) {
      if (err) {
        reject({statusCode: 500, resp: res});
      
      } else {

        if (res.statusCode < 200 || res.statusCode > 299) {
          reject({statusCode: res.statusCode, resp: res});

        } else {
          resolve(res);
        }
      }
    });

  });
};
