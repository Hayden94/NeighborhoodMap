var map;

var markers = [];

var mapCenter = {lat: 25.7955, lng: -80.1918};

var iconUrl = 'http://i.imgur.com/yY8lPe2.png';

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
    {title: 'Crust', location: {lat: 25.778406, lng: -80.205942}, category: 'Pizza'},
    {title: 'Zest Miami', location: {lat: 25.770810, lng: -80.189372}, category: 'Caribbean'},
    {title: 'Coyo Taco', location: {lat: 25.799690, lng: -80.199316}, category: 'Mexican'},
    {title: 'Mignonette', location: {lat: 25.793323, lng: -80.190472}, category: 'Seafood'},
    {title: 'NaiYaRa', location: {lat: 25.794466, lng: -80.144041}, category: 'Thai'},
    {title: 'Blue Collar Restaurant', location: {lat: 25.837844, lng: -80.184624}, category: 'BBQ'}
];


// https://www.thrillist.com/eat/miami/best-restaurants-miami
