var map;

function initMap() {
    map = new google.maps.Map($('#map')[0], {
        center:{lat: 25.7617, lng: -80.1918},
        styles: styles,
        zoom: 13
    });
};
