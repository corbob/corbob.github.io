// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 50.226774, lng: -119.280715};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 9, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
  var circle = new google.maps.Circle({
  center: uluru,
  clickable: false,
  editable: false,
  fillColor: '#004de8',
  fillOpacity: 0.27,
  map: map,
  radius: (25.0 / 6378.1) * 6378100,
  strokeColor: '#004de8',
  strokeOpacity: 0.62,
  strokeWeight: 1
  });
}