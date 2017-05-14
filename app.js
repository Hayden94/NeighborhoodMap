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

for (var i = 0; i < locations.length; i++) {
    var searchRequest = {
        term: locations[i].title,
        location: 'miami, fl'
    };
};

// give yelp client API info and issue a response
yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    // return first restaurant result based on searchRequest conditions
    client.search(searchRequest).then(response => {
        const result = response.jsonBody.businesses[0];
        const restaurant = JSON.stringify(result, null, 4);
        // console.log(restaurant);
    });
}).catch( e => {
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
