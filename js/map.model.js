var map;

var markers = [];

var mapCenter = {lat: 25.7955, lng: -80.1918};

var whiteIcon = 'http://i.imgur.com/yY8lPe2.png';

var blueIcon = 'http://i.imgur.com/fEE8ZUy.png';

// map styles that load on initMap
var styles = [
    {
        "featureType":"all",
        "elementType":"all",
        "stylers": [
            {"invert_lightness":true},
            {"saturation":10},
            {"lightness":30},
            {"gamma":0.5},
            {"hue":"#435158"}
        ]
    }
];

var locations = [
    {title: 'Bazaar Mar', location: {lat: 25.761180, lng: -80.193582}, category: 'Seafood'},
    {title: 'Phuc Yea', location: {lat: 25.840503, lng: -80.184657}, category: 'Vietnamese'},
    {title: 'Big Easy Whine Bar & Grill', location: {lat: 25.767167, lng: -80.193087}, category: 'South African'},
    {title: 'Santorini by Georgios', location: {lat: 25.769685, lng: -80.132389}, category: 'Greek'},
    {title: 'Crust', location: {lat: 25.778406, lng: -80.205942}, category: 'Pizza, Italian'},
    {title: 'Zest Miami', location: {lat: 25.770810, lng: -80.189372}, category: 'Caribbean'},
    {title: 'Coyo Taco', location: {lat: 25.799690, lng: -80.199316}, category: 'Mexican'},
    {title: 'Mignonette', location: {lat: 25.793323, lng: -80.190472}, category: 'Seafood'},
    {title: 'NaiYaRa', location: {lat: 25.794466, lng: -80.144041}, category: 'Thai'},
    {title: 'Blue Collar Restaurant', location: {lat: 25.837844, lng: -80.184624}, category: 'BBQ, American'},
    {title: 'Macchialina Taverna Rustica', location: {lat: 25.778578, lng: -80.141224}, category: 'BBQ, Italian'},
    {title: 'La Mar', location: {lat: 25.765296, lng: -80.185251}, category: 'Mandarin, Peruvian'},
    {title: 'Red, the Steakhouse', location: {lat: 25.770446, lng: -80.134703}, category: 'BBQ, Steakhouse'},
    {title: 'Tonis, Sushi Bar', location: {lat: 25.783189, lng: -80.132584}, category: 'Sushi'},
    {title: 'Yardbird Southarn Table & Bar', location: {lat: 25.789111, lng: -80.140227}, category: 'BBQ, Southern'},
    {title: 'Eating House', location: {lat: 25.764205, lng: -80.259476}, category: 'Brunch, American'},
    {title: 'Cibo Wine Bar', location: {lat: 25.767860, lng: -80.133633}, category: 'Italian, Whine house'},
    {title: 'Katsuya', location: {lat: 25.792607, lng: -80.128684}, category: 'Sushi'},
    {title: 'A Fish Called Avalon', location: {lat: 25.776958, lng: -80.131709}, category: 'Seafood'},
    {title: 'Zuma', location: {lat: 25.770536, lng: -80.189611}, category: 'Japanese, Sushi, Noodles'}
];


// https://www.thrillist.com/eat/miami/best-restaurants-miami
