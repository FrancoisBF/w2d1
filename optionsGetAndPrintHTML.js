//step 3
var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {
  https.get(options, function (response) {
    var buffer = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer);
    });
  });
}
getAndPrintHTML(requestOptions);
