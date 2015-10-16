# Sharepoint authentication using REST

This module will provide you the necessary `FedAuth` and `rtFa` cookies along with `request digest` value using which you will be able to call Sharepoint Online's  REST endpoint.

# Installation
```sh
$ npm install sharepoint-auth
```
# Usage

```sh
var Sharepoint = require('sharepoint-auth');

var options = {
    auth: {
        username: '<username>@<your-domain>.onmicrosoft.com',
        password: '<your-password>'
    },
    host: 'https://<your-domain>.sharepoint.com'
}

Sharepoint(options, function(err, result) {
    if (err) {
        // throw it the way you want.
    } else {
        // To get cookies, request digest and request digest timout values
        console.log('FedAuth Cookie', result.cookies.FedAuth);
        console.log('rtFa Cookie', result.cookies.rtFa);
        console.log('RequestDigest Value', result.requestDigest);
        console.log('RequestDigest timeout in seconds', result.requestDigestTimeoutSeconds);
    }
});
```

See `index.js` for example.

Pass the retrieved `FedAuth` and `rtFa` as shown below in headers

```sh
headers: {
  Cookie: 'FedAuth=' + result.cookies.FedAuth + ';rtFa=' + result.cookies.rtFa + ';',
  'X-RequestDigest': result.requestDigest
}
```