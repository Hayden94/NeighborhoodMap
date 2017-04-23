var map;

var markers = [];

function initMap() {
    // create new map with center initializing on Miami
    map = new google.maps.Map($('#map')[0], {
        center: mapCenter,
        styles: styles,
        zoom: 13
    });

    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    // Loop through the locations array to retrieve data and display markers
    for (var i = 0; i < locations.length; i++) {
        // Get specific location data
        var position = locations[i].location;
        var title = locations[i].title;
        var description = locations[i].description;
        var address = locations[i].address;
        var category = locations[i].category;

        // Create marker per location and put in markers array
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            icon: whiteIcon,
            title: title,
            description: description,
            address: address,
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

    // This function is called when a marker is clicked, populating it with specific marker data
    // The function closes the infowindow once the info window is closed
    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;

            var output = "<div class='infowindow'>";
            output += "<h3 class='infotitle' data-bind='text: title'>";
            output += "</h3>";
            output += "<div class='infoblue'>"
            output += "Description";
            output += "</div>";
            output += "<div class='infodescription'>";
            output += "</div>";
            output += "</br>";
            output += "<div class='infoblue'>";
            output += "Address";
            output += "</div>"
            output += "<div class='infoaddress'>";
            output += "</div>";
            output += "</br>";
            output += "<div class='infoblue'>";
            output += "Category";
            output += "</div>";
            output += "<div class='infocategory'>";
            output += "</div>";
            output += "</div>";

            infowindow.setContent(output);
            infowindow.open(map, marker);

            infowindow.addListener('closeclick', function() {
                infowindow.marker.setIcon(whiteIcon);
                infowindow.marker = null;
                infowindow.setMarker = null;
            });
        }
    }

    var vm = new ViewModel();
    ko.applyBindings(vm);
};

/* // View function for to retrieve each ind. location from locations arr
function Location(data) {
    this.title = ko.observable(data.title);
    this.latLng = ko.observableArray(data.location);
    this.description = ko.observable(data.description);
    this.address = ko.observable(data.address);
    this.category = ko.observable(data.category);
};
*/

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
