var Puppy = function (name, breed, foodsEaten) {
	this.name = name;
	this.breed = breed;
	this.foodsEaten = [];

	this.eatSomething = function(food) {
		this.foodsEaten.push(food);
	}

};


// var puppy1 = {
// 	name: "Jordy",
// 	breed: "Morkie",
// 	foodsEaten: ["Fromm Family Food", "Blue Wilderness", "Greenies", "rice"]
// }

// var puppy2 = {
// 	name: "Winston",
// 	breed: "Shih Tzu",
// 	foodsEaten: ["Alpo", "Taste of the Wild", "hotdogs", "socks"]
// }

// var puppy3 = {
// 	name: "Dudley",
// 	breed: "Goldendoodle",
// 	foodsEaten: ["Blue Buffalo", "Earthborn", "cheese", "leaves"]
// }



function introduce() {
	alert("hi I'm " + name + "! I'm a" + breed + "and I like to eat" + foodsEaten[2] + and sometimes + foodsEaten[4] "." );
}

puppy3.introduce