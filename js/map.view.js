var map;

function initMap() {
    // create new map with center initializing on Miami
    map = new google.maps.Map($('#map')[0], {
        center: {lat: 25.7617, lng: -80.1918},
        styles: styles,
        zoom: 13
    });

    // autocomplete functionality binded to the bounds of the map
    var input = $('#zoom-to-area-text')[0];
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
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
