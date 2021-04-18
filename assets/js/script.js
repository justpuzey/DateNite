var mainIngredientEl = document.querySelector("#main-ingredient");
var mealPic = document.querySelector(".meal-pic");

// modal click function vars
var btnSubmit = document.querySelector("#btn-submit")
var modalBg = document.querySelector(".modal-background")
var modal = document.querySelector(".modal")
modal.classList.remove('is-active');

// returns meal as the meal ID from the Object in the API
var getMeal = function (mainIngredientValue) {

  var alcoholicValue = document.alcoholicForm.alcoholic.value
  var mealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mainIngredientValue
  fetch(mealUrl)
    .then(function (response) {
      response.json().then(function (mealChoice) {

        //generate array of indexes
        let mealIndexArray = Array.from(Array(mealChoice.meals.length), (x, index) => index);
        console.log('mealIndexArray:', mealIndexArray);

        for (var i = 0; i < 6; i++) {
          let randomMealIndex = Math.floor(Math.random() * mealIndexArray.length)
          let mealIndex = mealIndexArray[randomMealIndex];
          randomMeal = mealChoice.meals[mealIndex];
          mealId = randomMeal.idMeal;
          mealThum = randomMeal.strMealThumb;
          mealName = randomMeal.strMeal;
          mealDisplayPic = document.querySelector(".meal-pic[data-pic='" + (i + 1) + "']")
          mealDisplayPic.setAttribute("src", mealThum);

          // Insert links for each meal and meal ID to link for detail.html
          var link1 = document.querySelector("#link" + (i + 1));
          link1.setAttribute("href", "./assets/pages/detail.html?mealid=" + mealId + "&alcoholic=" + alcoholicValue);
          mealName1 = document.querySelector("#mealName" + (i + 1));
          mealName1.textContent = mealName;

          //Remove this meal from array of indexes to prevent future duplicate meals
          mealIndexArray.splice(randomMealIndex, 1);
        }
      })
    })
}

// Modal click functions
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault;
  mainIngredientValue = mainIngredientEl.value.toLowerCase().trim();
  getMeal(mainIngredientValue)

  // displayModalRecommendations();
  modal.classList.add('is-active');
})

modalBg.addEventListener('click', function () {
  modal.classList.remove('is-active');
})
