var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();
var port = 8080;

app.get('/scrape', function (req,res) {
  var url = 'http://www.imdb.com/title/tt0111161';

  request(url, function (err, response, body) {
    if (!err) {
      var $ = cheerio.load(body);
      // variables to capture
      var title, rating, releaseYear;

      title = $('.titleBar h1');
      var titleText = title.text();

      rating = $('.ratingValue');
      var ratingText = rating.text();

      releaseYear = $('#titleYear');
      var releaseYearText = releaseYear.text();

      // to export all the above info in an object
      var movie = {
        title: titleText,
        rating: ratingText,
        releaseYear: releaseYearText
      };
    }
    fs.writeFile('output.json', JSON.stringify(movie, null, 4), function (err) {
      console.log('Success');
    });
    res.send('Check your console!');
  });
});

app.listen(port);
console.log('Server starts on ' + port);
