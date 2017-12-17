function initMap() {
	var Amsterdam = {lat: 52.3653, lng: 4.9024};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: Amsterdam
	});

	var locations = [
		['Two for Joy', 52.3842, 4.8847, 4],
		['Lot Sixty One', 52.3668, 4.8703, 3],
		['Dignita', 52.3659, 4.9038, 2],
		['Sweet Cup Cafe', 52.3632, 4.8859, 1],
		];

	var infowindow = new google.maps.InfoWindow();

	var marker, i;

	for (i = 0; i < locations.length; i++) {  
	  marker = new google.maps.Marker({
	    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	    map: map,
	    animation: google.maps.Animation.DROP
	  });

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
			})
		(marker, i));

		marker.addListener('click', toggleBounce);
	};
};

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } 
  else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
};