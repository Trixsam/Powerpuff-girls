function initMap() {
	var Amsterdam = {lat: 52.3653, lng: 4.9024};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: Amsterdam
	});

	var locations = [
		['T Nieuwediep', 52.3620, 4.9502, 12],
		['Noorderlicht Cafe', 52.3996, 4.8968, 11],
		['Hannekes Boom', 52.3762, 4.9116, 10],
		['Roest', 52.3720, 4.9266, 9],
		['T Eten en Drinken', 52.363910, 4.910622, 8],
		['Two for Joy', 52.3842, 4.8847, 7],
		['Lot Sixty One', 52.3668, 4.8703, 6],
		['Dignita', 52.3659, 4.9038, 5],
		['Sweet Cup Cafe', 52.3632, 4.8859, 4],
		['Vinnies', 52.346126, 4.891072, 3],
		['Quartier Putain', 52.3746, 4.8987, 2],
		['Toki', 52.382936, 4.885489, 1]
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