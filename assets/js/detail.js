// var mealID = '52941'
var mealTitle = document.querySelector('#meal-title');
var mealThumb = document.querySelector('#meal-img');
var mealIngredients = document.querySelector('#meal-ingredients');
var mealInsructions = document.querySelector('#meal-instructions');
var mealVideo = document.querySelector('#meal-video');
//-------------------------------------------------------------------

window.onload = function () {
  var url_string = (window.location.href).toLowerCase();
  var url = new URL(url_string);
  var mealId = url.searchParams.get("mealid");
  var alcoholic = url.searchParams.get("alcoholic");

  if (mealId) {
    displayMealDetails(mealId);
    displayDrinkDetails(alcoholic);

  } else {
    // redirect to the homepage
    document.location.replace("../../index.html");
  }
}

//ADD MEAL
var displayMealDetails = function (mealId) {
  var mealDetailURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId;
  fetch(mealDetailURL)
    .then(function (response) {
      response.json().then(function (mealDetails) {

        //Add meal title
        var mealAPITitle = mealDetails.meals[0].strMeal;
        mealTitle.textContent = mealAPITitle;

        //Add thumbnail image
        var thumbURL = mealDetails.meals[0].strMealThumb;
        var thumbEl = document.createElement('img');
        thumbEl.setAttribute("src", thumbURL);
        thumbEl.setAttribute("class", 'thumbnail');
        mealThumb.innerHTML = "";
        mealThumb.appendChild(thumbEl);

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
          if (ingredientList[i].ingredient != '' && ingredientList[i].ingredient != null) {
            var mIngEl = document.createElement('li');
            var measure = ingredientList[i].measure;
            if (measure === null) {
              measure = "";
            }
            mIngEl.innerHTML = ingredientList[i].measure + ' ' + ingredientList[i].ingredient;
            mealIngredients.appendChild(mIngEl);
          }
        }

        //Add Instructions
        var mealInstEl = document.createElement('p');
        mealInstEl.innerHTML = mealDetails.meals[0].strInstructions;
        mealInsructions.appendChild(mealInstEl);

        //Embed Video
        var videoURL = mealDetails.meals[0].strYoutube;
        if (videoURL) {
          videoID = videoURL.split('=');
          var videoEmbedURL = 'https://www.youtube.com/embed/' + videoID[1];
          mealVideo.setAttribute("src", videoEmbedURL);
          mealInstEl.innerHTML = mealDetails.meals[0].strInstructions;
          mealInsructions.appendChild(mealInstEl);
        }
      })
    })
}
//-------------------------------------------------------------------
//ADD COCKTAIL
var cocktailTitle = document.querySelector('#cocktail-title');
var cocktailThumb = document.querySelector('#cocktail-img');
var cocktailIngredients = document.querySelector('#cocktail-ingredients');
var cocktailInsructions = document.querySelector('#cocktail-instructions');
var cocktailVideo = document.querySelector('#cocktail-video');

var displayDrinkDetails = function (alcoholicValue) {
  alcoholicValue = parseInt(alcoholicValue, 10);
  // console.log('alcohol value:', typeof alcoholicValue)
  //fetch cotails based on filter type
  var filterType = ""
  if (alcoholicValue === 1) {
    filterType = 'Alcoholic';
  } else {
    filterType = 'Non_Alcoholic';
  }

  var cocktailsURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + filterType
  fetch(cocktailsURL)
    .then(function (response) {
      response.json().then(function (cocktail) {
        //Get random cocktail ID
        var cocktailIndex = Math.floor(Math.random() * cocktail.drinks.length);
        var cocktailID = cocktail.drinks[cocktailIndex].idDrink;

        //fetch cocktail details
        var cocktailDetailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailID;
        fetch(cocktailDetailURL)
          .then(function (response) {
            response.json().then(function (cocktailDetails) {

              //Add coctail title
              var coctailAPITitle = cocktailDetails.drinks[0].strDrink;
              cocktailTitle.textContent = coctailAPITitle;

              //Add thumbnail image
              var coctailThumbURL = cocktailDetails.drinks[0].strDrinkThumb;
              var cocktailThumbEl = document.createElement('img');
              cocktailThumbEl.setAttribute("src", coctailThumbURL);
              cocktailThumbEl.setAttribute("class", 'thumbnail');
              cocktailThumb.innerHTML = "";
              cocktailThumb.appendChild(cocktailThumbEl);

              //Ingredient List (this is needed to simplify API format)
              var cocktailIngredientList = ingredientList = [
                { 'ingredient': cocktailDetails.drinks[0].strIngredient1, 'measure': cocktailDetails.drinks[0].strMeasure1 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient2, 'measure': cocktailDetails.drinks[0].strMeasure2 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient3, 'measure': cocktailDetails.drinks[0].strMeasure3 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient4, 'measure': cocktailDetails.drinks[0].strMeasure4 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient5, 'measure': cocktailDetails.drinks[0].strMeasure5 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient6, 'measure': cocktailDetails.drinks[0].strMeasure6 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient7, 'measure': cocktailDetails.drinks[0].strMeasure7 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient8, 'measure': cocktailDetails.drinks[0].strMeasure8 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient9, 'measure': cocktailDetails.drinks[0].strMeasure9 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient10, 'measure': cocktailDetails.drinks[0].strMeasure10 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient11, 'measure': cocktailDetails.drinks[0].strMeasure11 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient12, 'measure': cocktailDetails.drinks[0].strMeasure12 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient13, 'measure': cocktailDetails.drinks[0].strMeasure13 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient14, 'measure': cocktailDetails.drinks[0].strMeasure14 },
                { 'ingredient': cocktailDetails.drinks[0].strIngredient15, 'measure': cocktailDetails.drinks[0].strMeasure15 }
              ]

              for (var i = 0; i < cocktailIngredientList.length; i++) {
                if (cocktailIngredientList[i].ingredient != '' && cocktailIngredientList[i].ingredient != null) {
                  var cocktailIngEl = document.createElement('li');
                  //replace null values with ""
                  var measure = cocktailIngredientList[i].measure;
                  if (measure === null) {
                    measure = "";
                  }
                  cocktailIngEl.innerHTML = measure + ' ' + cocktailIngredientList[i].ingredient;
                  cocktailIngredients.appendChild(cocktailIngEl);
                }
              }

              //Add Instructions
              var cocktailInstEl = document.createElement('p');
              cocktailInstEl.innerHTML = cocktailDetails.drinks[0].strInstructions;
              cocktailInsructions.appendChild(cocktailInstEl);
              //Recommended Glass
              var glassInstEl = document.createElement('p');
              glassInstEl.innerHTML = 'Recommended Serving Glass: ' + cocktailDetails.drinks[0].strGlass;
              glassInstEl.setAttribute("class", 'Glass');
              cocktailInsructions.appendChild(glassInstEl);
            })
          })
      })
    })
}
