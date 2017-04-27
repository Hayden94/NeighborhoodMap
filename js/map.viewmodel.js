// Location contructor to loop over each location
function Location(data) {
    this.title = data.title;
    this.latLng = data.location;
    this.description = data.description;
    this.address = data.address;
    this.category = data.category;
    this.marker = data.marker;

    this.show = ko.observable(true);
};

var ViewModel = function() {
    var self = this;

    self.locationMarkers = ko.observableArray([]);
    self.infowindow = new google.maps.InfoWindow();


    locations.forEach(function(location) {
        self.locationMarkers.push(new Location(location));

        location.marker.addListener('click', function() {
            self.openInfoWindow(location);
        });
    });

    self.openInfoWindow = function(location) {
        var output = "<div class='infowindow'>";
        output += "<h3 class='infotitle' data-bind='text: title'>";
        output += location.title;
        output += "</h3>";
        output += "<div class='infoblue'>"
        output += "Description";
        output += "</div>";
        output += "<div class='infodescription'>";
        output += location.description;
        output += "</div>";
        output += "</br>";
        output += "<div class='infoblue'>";
        output += "Address";
        output += "</div>"
        output += "<div class='infoaddress'>";
        output += location.address;
        output += "</div>";
        output += "</br>";
        output += "<div class='infoblue'>";
        output += "Category";
        output += "</div>";
        output += "<div class='infocategory'>";
        output += location.category;
        output += "</div>";
        output += "</div>";

        console.log(output);

        self.infowindow.setContent(output);

        self.infowindow.open(map, location.marker);

        self.infowindow.addListener('closeclick', function() {
                location.marker.setIcon(whiteIcon);
                location.setMarker = null;
            });
    };
};
