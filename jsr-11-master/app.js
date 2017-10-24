$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '79f589989a891978b349a7fb92b7994db7d4ada7'
  });
  
  // If the user clicks the login link, log them in
  $('#login').click(function() {
    _500px.login();
  });

  // When a successful login to 500px is made, they fire off the 'authorization_obtained' event
  _500px.on('authorization_obtained', function() {
  	console.log("success");
    // Successful OAuth login!
    
  });

  

});