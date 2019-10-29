// Set up the map view centerpoint and zoom
var map = L.map('map').setView([40, -120], 4);
// Select the graycolor map from mapbox.com
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox.light',
  accessToken: API_KEY
}).addTo(map);


//Add function to select color of map and legend circles based on magnitude
function chooseColor(magnitude) {
  return magnitude > 5 ? "red" :
    magnitude > 4 ? "orange" :
      magnitude > 3 ? "gold" :
        magnitude > 2 ? "yellow" :
          magnitude > 1 ? "yellowgreen" :
            "greenyellow"; // <= 1 default
}
//Store API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Call for earthquake json data
d3.json(queryUrl, function (json) {
  geoLayer = L.geoJson(json, {
    onEachFeature: function (feature, layer) {

      // Create popups on click of earthquake marker
      var popupText = "<h4>EARTHQUAKE!!</h4><br>" + "<b>Date:</b> " + new Date(feature.properties.time) +
        "<br><b>Magnitude:</b> " + feature.properties.mag +
        "<br><b>Location:</b> " + feature.properties.place +
        "<br><a href='" + feature.properties.url;

      layer.bindPopup(popupText, {
        closeButton: true,
        offset: L.point(0, -20)
      });
      layer.on('click', function () {
        layer.openPopup();
      });
    },

    // Make marker be a circle with size and color based on magnitude of the earthquake
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: Math.round(feature.properties.mag) * 3,
        color: chooseColor(feature.properties.mag),
        fillColor: chooseColor(feature.properties.mag),
        weight: 1,
        opacity: "1",
        fillOpacity: ".6"
      });
    },
  }).addTo(map);

  // Add legend to map
  var legend = L.control({ position: 'bottomright' });
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 1, 2, 3, 4, 5],
      labels = ["0-1", "1-2", "2-3", "3-4", "4-5", "5+"];

    for (var i = 0; i < grades.length; i++) {
      div.innerHTML += '<i style="background:' + chooseColor(grades[i] + 1) + '"></i> ' + "Mag " +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br><br>' : '+');
    }
    return div;
  };
  legend.addTo(map);
});