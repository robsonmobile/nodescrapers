# Scraping IMDB with Nodejs

*Web scraping is a technique in data extraction to pull information from websites.*

#### Technologies Used
- Nodejs
- ExpressJS (*nodejs framework*)
- Request (to make HTTP calls)
- Cheerio (to travers DOM and extract Data)

#### What does it do?
A single request is made to IMDB to extract:
- Name of the movie
- IMDB community rating of the movie
- Year in which the movie is released

and the extracted data gets saved in "output.json".


### Usage
First, fill the URL to scrape data from:
```javascript
// in app.js
var url = 'URL HERE';
```

To run, in the browser window, make request to:
`http://localhost:8080/scrape`
