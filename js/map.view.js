var map;

var markers = [];

$(".navbar").hide();

function initMap() {
    // create new map with center initializing on Miami
    map = new google.maps.Map($('#map')[0], {
        center: mapCenter,
        styles: styles,
        fullscreenControl: true,
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
    }

    var vm = new ViewModel();
    ko.applyBindings(vm);
};

$("input[name='Seafood']").click(function() {
    if (this.checked) {
        console.log('What up')
    } else {
        console.log('unchecked')
    }
});

$("#menu-icon").click(function () {
    $(".navbar").toggle();
});
