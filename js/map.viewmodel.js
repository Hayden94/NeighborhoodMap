// Location contructor to loop over each location
function Location(data) {
    this.title = data.title;
    this.latLng = data.location;
    this.description = data.description;
    this.address = data.address;
    this.category = data.category;
    this.id = data.id;
    this.marker = data.marker;

    this.show = ko.observable(true);
}

var ViewModel = function() {
    var self = this;

    self.locationMarkers = ko.observableArray([]);
    self.infowindow = new google.maps.InfoWindow();

    // Search filter for restaurant titles
    self.query = ko.observable('');
    self.filterRestaurants = ko.computed(function() {
        var filter = self.query().toLowerCase();

        // if filter is blank, return all locations
        if (!filter) {
            return self.locationMarkers();
        }
        // else filter according to query
        else {
            return ko.utils.arrayFilter(self.locationMarkers(), function(item) {
                return item.title.toLowerCase().indexOf(filter) !== -1;
            });
        }
    });

    // Search filter for google map markers
    self.filterMarkers = ko.computed(function() {
        var filter = self.query().toLowerCase();

        self.infowindow.close();

        // If query is empty, set all markers to be visible
        if (!filter) {
            for (var i = 0; i < self.locationMarkers().length; i++) {
                self.locationMarkers()[i].marker.setVisible(true);
                self.locationMarkers()[i].marker.setIcon(whiteIcon);
            }
        }
        // Else set markers visible relative to query
        else {
            for (var j = 0; j < self.locationMarkers().length; j++) {
                self.locationMarkers()[j].marker.setVisible(false);
                self.locationMarkers()[j].marker.setIcon(whiteIcon);

                if (self.locationMarkers()[j].title.toLowerCase().indexOf(filter) !== -1) {
                    self.locationMarkers()[j].marker.setVisible(true);
                }
            }
        }
    });

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
        output += "<a href='https://www.facebook.com/profile.php?id=";
        output += location.id;
        output += "' target='_blank'>";
        output += "<img src='img/fb_icon.png' ";
        output += "class='fb_icon' align='right'>";
        output += "</a>";
        output += "</br>";
        output += "<div class='infored'>";
        output += "Description";
        output += "</div>";
        output += "<div class='infodescription'>";
        output += location.description;
        output += "</br>";
        output += "</div>";
        output += "</br>";
        output += "<div class='infored'>";
        output += "Address";
        output += "</div>";
        output += "<div class='infoaddress'>";
        output += location.address;
        output += "</div>";
        output += "</br>";
        output += "<div class='infored'>";
        output += "Category";
        output += "</div>";
        output += "<div class='infocategory'>";
        output += location.category;
        output += "</div>";
        output += "</div>";

        // Set all markers to the white icon
        for (var i = 0; i < self.locationMarkers().length; i++) {
            self.locationMarkers()[i].marker.setIcon(whiteIcon);
        }

        // Animate the clicked restaurant's marker to the blue icon
        location.marker.setIcon(blueIcon);

        // Set the clicked restaurant's info window to appropriate output
        self.infowindow.setContent(output);

        // Open infowindow to set content
        self.infowindow.open(map, location.marker);

        // Close info window and set icon to white
        self.infowindow.addListener('closeclick', function() {
                location.marker.setIcon(whiteIcon);
                location.setMarker = null;
            });
    };
};
