var mealID = '52940'
var mealThumb = document.querySelector('#meal-img')
var mealDetailURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealID
fetch(mealDetailURL)
  .then(function (response) {
    response.json().then(function (mealDetails) {
      console.log('details', mealDetails)
      //Add meal title

      //Add thumbnail image
      var thumbURL = mealDetails.meals[0].strMealThumb
      console.log('img src', thumbURL)
      var thumbEl = document.createElement('img')
      thumbEl.setAttribute("src", thumbURL)
      thumbEl.setAttribute("class", 'thumbnail')
      mealThumb.innerHTML = ""
      mealThumb.appendChild(thumbEl)

    })
  })