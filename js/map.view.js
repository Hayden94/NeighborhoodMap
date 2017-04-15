function initMap() {
    // create new map with center initializing on Miami
    map = new google.maps.Map($('#map')[0], {
        center: mapCenter,
        styles: styles,
        zoom: 13
    });

    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    // autocomplete functionality binded to the bounds of the map
    var input = $('#zoom-to-area-text')[0];
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    // Loop through the locations array to retrieve data and display markers
    for (var i = 0; i < locations.length; i++) {
        // Get specific location data
        var position = locations[i].location;
        var title = locations[i].title;
        var category = locations[i].category;
        console.log(position);

        // Create marker per location and put in markers array
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            icon: iconUrl,
            title: title,
            category: category,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Extend bounds of map to position of each marker
        bounds.extend(marker.position);
        // Create an on click event to display info window.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
        });
    }

    // This function is called when a marker is clicked, populating it with specific marker data
    // The function closes the infowindow once the info window is closed
    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent("<div class='infowindow'><h3>" + marker.title + "</h3></br>Category: " + marker.category + "</div>");
            infowindow.open(map, marker);

            infowinow.addListener('closeclick', function() {
                infowindow.setMarker = null;
            });
        }
    }
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
