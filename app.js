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
var locationSearch = new Array();

var yelpResults = new Array();

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
    var result, restaurant;


    // Loop over location searches, return yelp result, and push it to an array
    for (var j = 0; j < locationSearch.length; j++) {
        client.search(locationSearch[j]).then(response => {
            result = response.jsonBody.businesses[0];
            yelpResults.push(result);
        }).catch(e => {
            console.log(e);
        });
    };
}).catch(e => {
    console.log(e);
});

// Give time for yelpResults to populate and the sort the data alphabetically by name
setTimeout(function() {
        yelpResults = yelpResults.sort(function(a, b) {
            return compareStrings(a.name, b.name);
        });
    }, 1750);

// return index.html on web server home
app.get('/', (req, res) => {
    res.sendFile("index.html");
    });


// return yelp json data
app.get('/yelp', (req, res) => {
        res.send(yelpResults)
        });


// Function to sort json object alphabetically
function compareStrings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

app.listen(port, (err) => {
  if (err) {
    return console.log('Error', err)
  }
  console.log(`server is listening on ${port}`)
});
