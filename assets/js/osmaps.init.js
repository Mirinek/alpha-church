$(document).ready(function() {
  if ($("#map").length) {
    initMap();
  }
});

function initMap() {
  var loc = [Number($("#map-lat").val()), Number($("#map-lng").val())];
  var mymap = L.map("map").setView(loc, Number($("#map-zoom").val()));
  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }
  ).addTo(mymap);
  var marker = L.marker(loc).addTo(mymap);
}
