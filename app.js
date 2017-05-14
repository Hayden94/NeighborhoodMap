var express = require("express");
var app = express();
const yelp = require('yelp-fusion');
// Yelp API client id and secret stored variables
const clientId = 'IBd5X_oO6aJyNMPMai8Q3A';
const clientSecret = 'PFwrZlr2sa5giWHS5btIQSD2aKOZ7n6xOhJ61siLqHZ6vIFMHnzVAulwsyraO1jW';
// port for web server to listen on
var port = 8080;

// add all directories to web server
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));

// Include map.model.js for locations variable
var model = require('./js/map.model');
var locations = model.locations;

// array to run through yelp search
var locationSearch = [];

var yelpResults = [];

// loop over location titles and push to an array
for (var i = 0; i < locations.length; i++) {
    var searchRequest = {
        term: locations[i].title,
        location: 'miami, fl'
    };

    locationSearch.push(searchRequest);
};

// give yelp client API info and issue a response
yelp.accessToken(clientId, clientSecret).then(response => {
    var client = yelp.client(response.jsonBody.access_token);

    for (var j = 0; j < locationSearch.length; j++) {
        var restaurant;
        client.search(locationSearch[j]).then(response => {
            var result = response.jsonBody.businesses[0];
            restaurant = JSON.stringify(result, ['name', 'image_url', 'url', 'rating', 'price', 'display_phone']);
            // yelpResults.push(restaurant);
            console.log(restaurant)
        }).catch(e => {
            console.log(e);
        });
    };
}).catch(e => {
    console.log(e);
});

// return index.html on web server home
app.get('/', (request, response) => {
  response.sendFile("index.html");
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Error', err)
  }
  console.log(`server is listening on ${port}`)
});
