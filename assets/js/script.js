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


var mainIngredientEl = document.querySelector("#main-ingredient");
var mealPic = document.querySelector(".meal-pic");


// modal click function vars
var btnSubmit = document.querySelector("#btn-submit")
var modalBg = document.querySelector(".modal-background")
var modal = document.querySelector(".modal")
modal.classList.remove('is-active');


// returns meal as the meal ID from the Object in the API
var getMeal = function (mainIngredientValue) {

  var alcoholicValue  = document.alcoholicForm.alcoholic.value
  console.log(alcoholicValue)

  // var mainIngredient = 'chicken'
  var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mainIngredientValue
  fetch(mealUrl)
    .then(function (response) {
      response.json().then(function (mealChoice) {
        randomMeal = mealChoice.meals[Math.floor(Math.random() * mealChoice.meals.length)];
        mealId = randomMeal.idMeal;
        mealThum = randomMeal.strMealThumb;
        mealName = randomMeal.strMeal;

        mealDisplayPic = document.querySelector("#meal-pic[data-pic='1']")
        mealDisplayPic.setAttribute("src", mealThum);

        // Insert links for each meal and meal ID to link for detail.html
        var link1 = document.querySelector("#link1");
        link1.setAttribute("href", "./assets/pages/detail.html?mealId=" + mealId + "&alcoholic=" + alcoholicValue);

        mealName1 = document.querySelector("#mealName1");
        mealName1.textContent = mealName;

        // Turn into a for loop later for cleanup
        // for(var i = 0; i < 4; i++) {
        // randomMeal1 = mealChoice.meals[Math.floor(Math.random() *  mealChoice.meals.length)];
        // meal1Id = randomMeal1.idMeal;
        // meal1Thum = randomMeal1.strMealThumb;
        // meal1Name = randomMeal1.strMeal;
        // console.log(meal1Id)
        // console.log(meal1Thum)
        // console.log(meal1Name)
        // }

        // var mealID = mealChoice.meals[Math.floor(Math.random() *  mealChoice.meals.length)].idMeal
        // console.log('meals based on main Ingredient: ', mealChoice)
        // console.log(mealID)
        // return mealID

        // var mealDetailURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealID
        // fetch(mealDetailURL)
        //   .then(function (response) {
        //     response.json().then(function (mealDetails) {
        //       console.log('details', mealDetails)
      })
    })

  var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mainIngredientValue
  fetch(mealUrl)
    .then(function (response) {
      response.json().then(function (mealChoice) {
        randomMeal = mealChoice.meals[Math.floor(Math.random() * mealChoice.meals.length)];
        mealId = randomMeal.idMeal;
        mealThum = randomMeal.strMealThumb;
        mealName = randomMeal.strMeal;

        mealDisplayPic = document.querySelector("#meal-pic[data-pic='2']")
        mealDisplayPic.setAttribute("src", mealThum);

        var link2 = document.querySelector("#link2");
        link2.setAttribute("href", "./assets/pages/detail.html?mealId=" + mealId + "&alcoholic=" + alcoholicValue);

        mealName2 = document.querySelector("#mealName2");
        mealName2.textContent = mealName;
      })
    })

  var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mainIngredientValue
  fetch(mealUrl)
    .then(function (response) {
      response.json().then(function (mealChoice) {
        randomMeal = mealChoice.meals[Math.floor(Math.random() * mealChoice.meals.length)];
        mealId = randomMeal.idMeal;
        mealThum = randomMeal.strMealThumb;
        mealName = randomMeal.strMeal;

        mealDisplayPic = document.querySelector("#meal-pic[data-pic='3']")
        mealDisplayPic.setAttribute("src", mealThum);

        var link3 = document.querySelector("#link3");
        link3.setAttribute("href", "./assets/pages/detail.html?mealId=" + mealId + "&alcoholic=" + alcoholicValue);

        mealName3 = document.querySelector("#mealName3");
        mealName3.textContent = mealName;
      })
    })

  var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mainIngredientValue
  fetch(mealUrl)
    .then(function (response) {
      response.json().then(function (mealChoice) {
        randomMeal = mealChoice.meals[Math.floor(Math.random() * mealChoice.meals.length)];
        mealId = randomMeal.idMeal;
        mealThum = randomMeal.strMealThumb;
        mealName = randomMeal.strMeal;

        mealDisplayPic = document.querySelector("#meal-pic[data-pic='4']")
        mealDisplayPic.setAttribute("src", mealThum);

        var link4 = document.querySelector("#link4");
        link4.setAttribute("href", "./assets/pages/detail.html?mealId=" + mealId + "&alcoholic=" + alcoholicValue);

        mealName4 = document.querySelector("#mealName4");
        mealName4.textContent = mealName;
      })
    })

  var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mainIngredientValue
  fetch(mealUrl)
    .then(function (response) {
      response.json().then(function (mealChoice) {
        randomMeal = mealChoice.meals[Math.floor(Math.random() * mealChoice.meals.length)];
        mealId = randomMeal.idMeal;
        mealThum = randomMeal.strMealThumb;
        mealName = randomMeal.strMeal;

        mealDisplayPic = document.querySelector("#meal-pic[data-pic='5']")
        mealDisplayPic.setAttribute("src", mealThum);

        var link5 = document.querySelector("#link5");
        link5.setAttribute("href", "./assets/pages/detail.html?mealId=" + mealId + "&alcoholic=" + alcoholicValue);

        mealName5 = document.querySelector("#mealName5");
        mealName5.textContent = mealName;
      })
    })


}
//   })
// }


// var getNonAlcDrink = function() {
//   var drinkNAurl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
//   fetch(drinkNAurl)
//   .then(function(response) {
//     response.json().then(function(drinkNaChoice) {
//       var drinkNa = drinkNaChoice.drinks[Math.floor(Math.random() *  drinkNaChoice.drinks.length)];
//       return drinkNa.idDrink
//     })
//   })
// }

// var getAlcDrink = function() {
//   var drinkAurl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
//   fetch(drinkAurl)
//   .then(function(response) {
//     response.json().then(function(drinkAChoice) {
//       var drinkA = drinkAChoice.drinks[Math.floor(Math.random() * drinkAChoice.drinks.length)];
//       return drinkA.idDrink
//     })
//   })
// }

// getMeal()
// getNonAlcDrink()
// getAlcDrink()


var displayModalRecommendations = function () {

}

// Modal click functions
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault;
  mainIngredientValue = mainIngredientEl.value.toLowerCase().trim();

  getMeal(mainIngredientValue)


  displayModalRecommendations();

  modal.classList.add('is-active');
})

modalBg.addEventListener('click', function () {
  modal.classList.remove('is-active');
})
