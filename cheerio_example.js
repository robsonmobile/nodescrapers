var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();
var port = 8081;

var url = 'http://www.indeed.co.in/viewjob?jk=3fd2256ca92a9e5f&tk=1anqiksd75t20bld&from=recommendedjobs';

request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else{
    var $ = cheerio.load(body);

    var companyName = $('.company');
    var companyNameText = companyName.text();

    var jobTitle = $('.jobtitle font');
    var jobTitleText = jobTitle.text();

    var location = $('.location');
    var locationText = location.text();

    var jobSummary = $('#job_summary ul li');
    var jobSummaryText = jobSummary.text();

    // to export all the above info in an object
    var jobObj = {
      companyName: companyNameText,
      jobTitle: jobTitleText,
      location: locationText,
      jobSummary: jobSummaryText
    };

    console.log(jobObj);
    console.log('Done Scraping');
  }
});

// activate server
app.listen(port);
console.log('Server starts on port ' + port);
