function initMap() {
	var Amsterdam = {lat: 52.3653, lng: 4.9024};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: Amsterdam
	});

	var locations = [
		// ['Pacific Parc', 52.3860, 4.8714, 15],
		// ['De Nieuwe Anita', 52.3742, 4.8727, 14],
		// ["Butcher's Tears", 52.3472, 4.8535, 13],
		// ['Worst Wijncafe', 52.3888, 4.8877, 12],
		// ['Hiding in Plain Sight', 52.3717, 4.9077, 11],
		// ['Cafe Ruk & Pluk', 52.357434, 4.926673, 10],
		// ['Eddy Cafe Bar', 52.3554, 4.8908, 9],
		// ['Bar Bukowski', 52.3579, 4.9177, 8],
		// ['Cafe Kostverloren', 52.3663, 4.8619, 7],
		['The Butcher', 52.355453, 4.892278, 4],
		// ['Cafe Nol', 52.3783, 4.8835, 5],
		['Claire', 52.366527, 4.896697, 3],
		// ['Cafe de Heuvel', 52.3625, 4.8880, 3],
		['De School', 52.370100, 4.843592, 2],
		['Cafe de Wetering', 52.361234, 4.888873, 1]
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