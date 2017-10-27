var adjectives = ["miniature", "bacon-wrapped", "deep-fried", "Mexican", "breakfast", "spicy", "jumbo", "tuscan", "bold", "cinnamon swirl", "hot & fresh", "zesty", "sour", "baked", "fire roasted", "blackened", "ice cold", "juicy", "sweetened", "chipolte", "mashed"];
var flavors = ["hot cheetohs", "lavender", "siracha", "buffalo", "avocado", "pumpkin spice", "balsamic vinegar", "kale", "brisket", "creme fraiche", "thai peanut", "kimchi", "pastrami-stuffed", "four cheese", "chorizo", "chili cheese", "tropical fruit", "cheesy", "baja fish", "chicken", "chocolate", "oreo"];
var foods = ["spaghetti", "mac and cheese", "bagel", "dumplings", "pretzel", "burger", "hotdog", "salad", "tamales", "latte", "frappucino", "taco", "nachos", "soup", "pizza", "calzone", "stir fry", "donut", "sandwhich", "curry", "rice bowl", "shake", "poutine", "poke", "muffins", "waffles", "ramen", "cubano", "hummus", "toast", "toast", "biscuit", "nuggets", "chips"]





$('button').click(function(){
  event.preventDefault();
   var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
   var flavor = flavors[Math.floor(Math.random()*flavors.length)];
   var food = foods[Math.floor(Math.random()*foods.length)];
  
  if ( $('h2').text().length == 0 ){
    $('h2').append(adjective + " "+ flavor +" "+ food);
     }
  else {
    $('h2').empty();
    $('h2').append(adjective + " "+ flavor +" "+ food);
  }
})

console.log(adjective + " "+ flavor +" "+ food);