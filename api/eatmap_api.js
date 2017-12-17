function initMap() {
	var Amsterdam = {lat: 52.3653, lng: 4.9024};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: Amsterdam
	});

	var locations = [
		['Gs Really Nice Place', 52.380704, 4.884483, 8],
		['Bakers & Roasters', 52.3573, 4.8899, 7],
		['Staring at Jacob', 52.3622, 4.8620, 6],
		['Lavinia', 52.3631, 4.8898, 5],
		['Juice to Boost', 52.3659, 4.8949, 4],
		['ROOTS Amsterdam', 52.3533, 4.8558, 3],
		['Pluk Amsterdam', 52.372310,  4.883744, 2],
		['The Meets', 52.3512, 4.8918, 1]
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