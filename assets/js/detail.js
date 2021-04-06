var mealID = '52940'
var mealTitle = document.querySelector('#meal-title')
var mealThumb = document.querySelector('#meal-img')

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

    })
  })