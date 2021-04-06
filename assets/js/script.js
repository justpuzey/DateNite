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



// returns meal as the meal ID from the Object in the API
var getMeal = function () {
  var mainIngredient = 'chicken'
  var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mainIngredient
  fetch(mealUrl)
    .then(function (response) {
      response.json().then(function (mealChoice) {
        var mealID = mealChoice.meals[0].idMeal
        console.log('meals based on main Ingredient: ', mealChoice)
        console.log(mealID)

        var mealDetailURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealID
        fetch(mealDetailURL)
          .then(function (response) {
            response.json().then(function (mealDetails) {
              console.log('details', mealDetails)
            })
          })
        })
      })
    }
  

var getNonAlcDrink = function() {
  var drinkNAurl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  fetch(drinkNAurl)
  .then(function(response) {
    response.json().then(function(drinkNaChoice) {
      var drinkNa = drinkNaChoice.drinks[Math.floor(Math.random() *  drinkNaChoice.drinks.length)];
      return drinkNa.idDrink
    })
  })
}

var getAlcDrink = function() {
  var drinkAurl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  fetch(drinkAurl)
  .then(function(response) {
    response.json().then(function(drinkAChoice) {
      var drinkA = drinkAChoice.drinks[Math.floor(Math.random() * drinkAChoice.drinks.length)];
      return drinkA.idDrink
    })
  })
}

getMeal()
getNonAlcDrink()
getAlcDrink()