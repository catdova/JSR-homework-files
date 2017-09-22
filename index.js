//browser prompts user to imput their favorite dog breed
var userBreed = prompt("what's your favorite dog breed?")

//array of dog breeds
var dogBreeds = ["maltese", "yorkie", "shih tzu", "pug", "corgi", "beagle", "german shepard", "poodle", "mutt"]

//my favorite dog breed
var favoriteBreed = "mutt"

//program compares my favorite breed with user input and browser shows message.
if (userBreed == favoriteBreed) {
  alert("we're besties!")
  }
else {
  alert("you're wrong!")
}
