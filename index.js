var Sharepoint = require('./sharepoint'),
  request = require('./request').request,
  options = {
    auth: {
      username: '<username>@<your-domain>.onmicrosoft.com',
      password: '<password>'
    },
    host: 'https://<your-domain>.sharepoint.com'
  };

Sharepoint(options, function(err, result) {
  if (err) {
    console.log('Err ', err);

  } else {

    /*
    *  Cookie values and request digest
    *  result.cookies.FedAuth
    *  result.cookies.rtFa
    *  result.requestDigest
    */

    var requestOptions = {
      url: options.host + '/_api/web/lists',
      method: 'GET',
      headers: {
        'Cookie': 'FedAuth=' + result.cookies.FedAuth + ';rtFa=' + result.cookies.rtFa + ';',
        'X-RequestDigest': result.requestDigest
      },
      json: true,
      followAllRedirects: true
    }

    request(requestOptions)
    .then(function(resp) {
      console.log('Response', resp.body);
    })
    .error(function(err) {
      console.log('Error', err);
    })
    .catch(function(exception) {
      console.log('Exception', exception);
    })
  }
});