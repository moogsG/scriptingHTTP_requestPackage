var request = require('request');
var fs = require('fs');
function imgDownload(option) {
  request.get(option)
    .on('error', function(err){
      throw err;
    })
    .on('response', function(response){
      console.log('Response Status Code: ', response.statusCode);
      console.log('Response Message: ', response.statusMessage);
      console.log('Response Content Type: ', response.headers['content-type']);
    })
  .pipe(fs.createWriteStream('./future.jpg'));
}

imgDownload('https://sytantris.github.io/http-examples/future.jpg');