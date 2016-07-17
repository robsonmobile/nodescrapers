var express = require('express');
var fs = require('fs');
var path = require('path');
var request = require('request');

var app = express();
var port = 8080;

var url = 'http://google.com';
// Example 1
// request(url, function (err, res, body) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(body);
//   }
// });

// Example 2
var destination = fs.createWriteStream('./downloads/google2.html');
request(url)
  .pipe(destination)
  .on('finish', function () {
    console.log('Done Downloading');
  })
  .on('error', function () {
    console.log('There is an ERROR');
  });



// activate server
app.listen(port);
console.log('Server starts on port ' + port);
