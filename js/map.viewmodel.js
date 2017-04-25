// Location contructor to loop over each location
function Location(data) {
    this.title = data.title;
    this.latLng = data.location;
    this.description = data.description;
    this.category = data.category;
    this.marker = data.marker;

    this.show = ko.observable(true);
};

var ViewModel = function() {
    var self = this;

    self.locationMarkers = ko.observableArray([]);


    locations.forEach(function(location) {
        self.locationMarkers.push(new Location(location));

        location.marker.addListener('click', function() {
            self.openInfoWindow();
        });
    });

    self.openInfoWindow = function(location) {
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

        console.log(output);

        infowindow.setContent(output);

        infowindow.open(map, location.marker);

        infowindow.addListener('closeclick', function() {
                infowindow.marker.setIcon(whiteIcon);
                infowindow.marker = null;
                infowindow.setMarker = null;
            });
    };
};
