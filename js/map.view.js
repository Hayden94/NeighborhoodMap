var map;

var markers = [];

var infowindow = new google.maps.InfoWindow();

function initMap() {
    // create new map with center initializing on Miami
    map = new google.maps.Map($('#map')[0], {
        center: mapCenter,
        styles: styles,
        zoom: 13
    });

    var bounds = new google.maps.LatLngBounds();

    // Loop through the locations array to retrieve data and display markers
    for (var i = 0; i < locations.length; i++) {
        // Get specific location data
        var position = locations[i].location;

        // Create marker per location and put in markers array
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            icon: whiteIcon,
            animation: google.maps.Animation.DROP,
            id: i
        });

        // Push the marker to our array of markers.
        markers.push(marker);

        // Make each marker a property of the location
        locations[i].marker = marker;

        // Extend bounds of map to position of each marker
        bounds.extend(marker.position);
        // Create an on click event to display info window.
        marker.addListener('click', function() {
            // populateInfoWindow(this, largeInfoWindow);

            // loop through markers and set all icons to white
            for (var j = 0; j < markers.length; j++) {
                markers[j].setIcon(whiteIcon);
            }
            // set selected icon to blue
            this.setIcon(blueIcon);
        });

    // autocomplete functionality binded to the bounds of the map
    var input = $('#zoom-to-area-text')[0];
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    }

    var vm = new ViewModel();
    ko.applyBindings(vm);
};

// Get the address from text box and set map to new center once the search button is clicked
function zoomToArea() {
    // Initialize the geocoder
    var geocoder = new google.maps.Geocoder();
    // Get address from text box
    var address = $('#zoom-to-area-text').val();
    // if address is blank, alert the user what to enter
    if (address == '') {
        window.alert("Please enter an area or specific address.");
    } else {
        geocoder.geocode(
                         { address: address,
                         }, function(results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                map.setCenter(results[0].geometry.location);
                                map.setZoom(13);
                            } else {
                                window.alert("We couldn't find that location, try entering a more scecific place.");
                            }
                         });
    }
};

// Map center will reset to miami center and reset zoom
function resetMap() {
    if (map.getCenter() != mapCenter | map.getZoom() != 13) {
        map.setCenter(mapCenter);
        map.setZoom(13);
    }
};

// Event listener to run zoomToArea() function once Search button is clicked
$("#zoom-to-area").click(function() {
    zoomToArea();
});
// Event listener to run zoomToArea() function once enter is clicked in textbox
$('#zoom-to-area-text').keypress(function(e) {
    var key = e.which;
    if (key == 13) {
        zoomToArea();
    }
});
// Event listener to reset map to miami center if it is not in focus
$('#reset').click(function() {
    resetMap();
});
