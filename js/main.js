var mapsApiKey = "AIzaSyD-u97DVBBkrS1j2_Q654gfZ24xdGqcEl8";
var directionsURL = "https://www.google.com/maps/dir//Lowe's+Home+Improvement/@40.7422229,-73.9973394,14.83z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c259bcca98b30f:0x619cf4ca08535948!2m2!1d-73.9946141!2d40.7406406!3e3";

function initMap() {
  var pin = {lat: 40.746677, lng: -74.0025887};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: pin,
    styles: mapStyles
    });
  var marker = new google.maps.Marker({
    position: pin,
    map: map
  });
}

var mapsScript = document.createElement('script');
mapsScript.src = "https://maps.googleapis.com/maps/api/js?key="+mapsApiKey+"&callback=initMap";
mapsScript.async = true;
document.getElementsByTagName('body')[0].appendChild(mapsScript);

document.getElementById("get-directions").addEventListener("click", function() {
  window.open(directionsURL);
});
