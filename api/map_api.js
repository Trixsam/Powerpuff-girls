function initMap() {
  var myLatLng = {lat: 52.370, lng: 4.895};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    map: map,
    title: 'Hello World!'
  });
  marker.addListener('click', toggleBounce);
};

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } 
  else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
};