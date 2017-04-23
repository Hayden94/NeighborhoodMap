function Location(data) {
    this.title = data.title;
    this.latLng = data.location;
    this.description = data.description;
    this.category = data.category;
    this.marker = data.marker;
    //
    this.show = ko.observable(true);
};

var ViewModel = function() {
    var self = this;

    self.locationMarkers = ko.observableArray([]);

    locations.forEach(function(location) {
        self.locationMarkers.push(new Location(location));
    });

    self.openInfoWindow = function(location) {

    };
}
