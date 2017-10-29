$(function() {
  // DOM is now ready//
  _500px.init({
  	sdk_key: '79f589989a891978b349a7fb92b7994db7d4ada7'
  });
  
  // If the user clicks the login link, log them in//
  $('#login').click(function() {
  	_500px.login();
  });

  // // When a successful login to 500px is made, they fire off the 'authorization_obtained' event//
  // _500px.on('authorization_obtained', function() {
  //     console.log("success");
  //   // Successful OAuth login!//

  // });
  //hide the sign in view and show the results view. //
  _500px.on('authorization_obtained', function() {
  	$('.sign-in-view').hide();
  	$('.image-results-view').show();

  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
	    var lat = position.coords.latitude;
	    var long = position.coords.longitude;

	    console.log('lat: ', lat);
	    console.log('long: ', long);
	     // Feel free to adjust the search radius as you see fit
	     var radius = '25mi';

	     var searchOptions = {
	        geo: lat + ',' + long + ',' + radius,
	        only: 'Landscapes', // We only want landscape photos
	        image_size: 3 // This isn't neccessary but by default the images are thumbnail sized
	    };

	    _500px.api('/photos/search', searchOptions, function(response) {
	        if (response.data.photos.length == 0) {
	            alert('No photos found!');
	        } else {
	            console.log(response.data.photos.length);
	        // Handle the successful response here
	         for (i = 0; i < response.data.photos.length; i++) {
   				 var imageList = "<img src=" + response.data.photos[i].image_url + " />"
   				 $('.images').append(imageList);
   				}
	        	
	   			}	
	    	});
		});
  	} else {
  		$('.images').append('sorry, the browser does not support geolocation');
  	}
  });
  

}); 