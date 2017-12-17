function initMap() {
	var Amsterdam = {lat: 52.3653, lng: 4.9024};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: Amsterdam
	});

	var locations = [
		['Hutspot', 52.3569, 4.8996, 10],
		['De 9 straatjes', 52.3702, 4.8861, 9],
		['Things I like Things I love', 52.370660, 4.853003, 8],
		['The Darling', 52.3821, 4.8879, 7],
		['Jutka & Riska', 52.3665, 4.8723, 6],
		['Marbles Vintage & Design', 52.382585, 4.887506, 5],
		['Athenaeum Boekhandel', 52.368909, 4.889089, 4],
		['Skins', 52.358573, 4.878648, 3],
		['Verse', 52.368085, 4.883037, 2],
		['The Port Game', 52.3976, 4.8725, 1]
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