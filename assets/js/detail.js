var mealID = '52940'
var mealTitle = document.querySelector('#meal-title')
var mealThumb = document.querySelector('#meal-img')
var mealIngredients = document.querySelector('#meal-ingredients')
var mealInsructions = document.querySelector('#meal-instructions')
//-------------------------------------------------------------------
//ADD MEAL
var mealDetailURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealID
fetch(mealDetailURL)
  .then(function (response) {
    response.json().then(function (mealDetails) {
      console.log('details', mealDetails)
      //Add meal title
      var mealAPITitle = mealDetails.meals[0].strMeal;
      console.log(mealAPITitle)
      mealTitle.textContent = mealAPITitle;

      //Add thumbnail image
      var thumbURL = mealDetails.meals[0].strMealThumb
      var thumbEl = document.createElement('img')
      thumbEl.setAttribute("src", thumbURL)
      thumbEl.setAttribute("class", 'thumbnail')
      mealThumb.innerHTML = ""
      mealThumb.appendChild(thumbEl)

      //Ingredient List (this is needed to simplify API format)
      var ingredientList = [
        { 'ingredient': mealDetails.meals[0].strIngredient1, 'measure': mealDetails.meals[0].strMeasure1 },
        { 'ingredient': mealDetails.meals[0].strIngredient2, 'measure': mealDetails.meals[0].strMeasure2 },
        { 'ingredient': mealDetails.meals[0].strIngredient3, 'measure': mealDetails.meals[0].strMeasure3 },
        { 'ingredient': mealDetails.meals[0].strIngredient4, 'measure': mealDetails.meals[0].strMeasure4 },
        { 'ingredient': mealDetails.meals[0].strIngredient5, 'measure': mealDetails.meals[0].strMeasure5 },
        { 'ingredient': mealDetails.meals[0].strIngredient6, 'measure': mealDetails.meals[0].strMeasure6 },
        { 'ingredient': mealDetails.meals[0].strIngredient7, 'measure': mealDetails.meals[0].strMeasure7 },
        { 'ingredient': mealDetails.meals[0].strIngredient8, 'measure': mealDetails.meals[0].strMeasure8 },
        { 'ingredient': mealDetails.meals[0].strIngredient9, 'measure': mealDetails.meals[0].strMeasure9 },
        { 'ingredient': mealDetails.meals[0].strIngredient10, 'measure': mealDetails.meals[0].strMeasure10 },
        { 'ingredient': mealDetails.meals[0].strIngredient11, 'measure': mealDetails.meals[0].strMeasure11 },
        { 'ingredient': mealDetails.meals[0].strIngredient12, 'measure': mealDetails.meals[0].strMeasure12 },
        { 'ingredient': mealDetails.meals[0].strIngredient13, 'measure': mealDetails.meals[0].strMeasure13 },
        { 'ingredient': mealDetails.meals[0].strIngredient14, 'measure': mealDetails.meals[0].strMeasure14 },
        { 'ingredient': mealDetails.meals[0].strIngredient15, 'measure': mealDetails.meals[0].strMeasure15 },
        { 'ingredient': mealDetails.meals[0].strIngredient16, 'measure': mealDetails.meals[0].strMeasure16 },
        { 'ingredient': mealDetails.meals[0].strIngredient17, 'measure': mealDetails.meals[0].strMeasure17 },
        { 'ingredient': mealDetails.meals[0].strIngredient18, 'measure': mealDetails.meals[0].strMeasure18 },
        { 'ingredient': mealDetails.meals[0].strIngredient19, 'measure': mealDetails.meals[0].strMeasure19 },
        { 'ingredient': mealDetails.meals[0].strIngredient20, 'measure': mealDetails.meals[0].strMeasure20 }
      ]

      for (var i = 0; i < ingredientList.length; i++) {
        if (ingredientList[i].ingredient != '') {
          console.log('iteration: ' + i + 'ingredient: ' + ingredientList[i].ingredient)
          var mIngEl = document.createElement('li')
          mIngEl.innerHTML = ingredientList[i].measure + ' ' + ingredientList[i].ingredient
          mealIngredients.appendChild(mIngEl)
        }
      }

      //Add Instructions
      var mealInstEl = document.createElement('p')
      mealInstEl.innerHTML = mealDetails.meals[0].strInstructions
      mealInsructions.appendChild(mealInstEl)


    })
  })

//-------------------------------------------------------------------
//ADD COCTAIL
