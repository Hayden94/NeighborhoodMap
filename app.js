var express = require("express");
var app = express();
var Yelp = require('yelpv3');

var port = 8080;

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));

var yelp = new Yelp({
    app_id: 'IBd5X_oO6aJyNMPMai8Q3A',
    app_secret: 'PFwrZlr2sa5giWHS5btIQSD2aKOZ7n6xOhJ61siLqHZ6vIFMHnzVAulwsyraO1jW',
});

yelp.business('bazaar-mar-miami')
.then(function(data) { console.log(data); })
.catch(function(err) { console.log(err); });


app.get('/', (request, response) => {
  response.sendFile("index.html");
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Error', err)
  }
  console.log(`server is listening on ${port}`)
});
