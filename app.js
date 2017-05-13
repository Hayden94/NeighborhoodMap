var express = require("express");
var app = express();
const yelp = require('yelp-fusion');

const clientId = 'IBd5X_oO6aJyNMPMai8Q3A';
const clientSecret = 'PFwrZlr2sa5giWHS5btIQSD2aKOZ7n6xOhJ61siLqHZ6vIFMHnzVAulwsyraO1jW';

var port = 8080;

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));

const searchRequest = {
    term: 'Crust',
    location: 'miami, fl'
};

yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
        const firstResult = response.jsonBody.businesses[0];
        const restaurant = JSON.stringify(firstResult, null, 4);
        console.log(restaurant);
    });
}).catch( e => {
    console.log(e);
});

app.get('/', (request, response) => {
  response.sendFile("index.html");
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Error', err)
  }
  console.log(`server is listening on ${port}`)
});
