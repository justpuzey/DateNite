// Site opens
// User presented with a modal
// Modal does age verification
// If user is under age of 21, app runs without drink recipe
// If user is over 21 app runs with drink recipe 
// When app runs user is able to select movie based on genre, year it was made, and
// Based on movie selections, a random food recipe and drink recipe are also given
// Create a function to select the movie
// Create a function to asign that movie a random value
// Associate the random value with types of cuisine
// Associate random value with drink recipe selection
// Selections can be made for drink with user input as well
// selections can be made for food with user input as well

// Possible upgrades: drink selecction based on users age


var getMeal = function() {
  var url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  fetch(url)
  .then(function(response) {
    response.json().then(function(mealChoice) {
      console.log(mealChoice)
    })
  })
}

var getNonAlcDrink = function() {
  var url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  fetch(url)
  .then(function(response) {
    response.json().then(function(drinkNaChoice) {
      console.log(mealChoice)
    })
  })
}

var getAlcDrink = function() {
  var url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  fetch(url)
  .then(function(response) {
    response.json().then(function(drinkAChoice) {
      console.log(mealChoice)
    })
  })
}

getMeal()
getNonAlcDrink()
getAlcDrink()