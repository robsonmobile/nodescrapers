var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

var port = 8000;

var url = 'https://pinterest.com/pin/179932947591619283/';

request(url, function (err,res,body) {
  if (!err) {
    var $ = cheerio.load(body);

    var title = $('h1[data-reactid=18]');
    var titleText = title.text();

    var src = $('img[data-reactid=24]').attr('src');



    var pin = {
      title: titleText,
      src: src
    };
    console.log(pin);
    console.log('Done Scraping Pin');
  }
});

app.listen(port);
console.log('Server starts on ' + port);
