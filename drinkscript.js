$("#clear-button2").on("click", function (event) {
  event.preventDefault();
  clearDrinks();
});

function clearDrinks() {
  $("#drinkResults").empty();
}

$("#drink-button").on("click", function () {
  let ingredient = $("#textarea-drink").val();
  findDrinkByIngredient(ingredient);

});

function findDrinkByIngredient(ingredient) {
  var ingredientURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
  $.ajax({
    url: ingredientURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < 5; i++) {
      var IDnum = response.drinks[i].idDrink;
      console.log(IDnum);
      findRecipe(IDnum, i + 1);
      $("#drinkResults").empty()
    }
  });
};

function findRecipe(IDnum, id) {
  var cocktailURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${IDnum}`;
  $.ajax({
    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var curDrink = response.drinks[0];
    var drinkName = curDrink.strDrink;
    var drinkResult = $("#drinkResults");
    var drinkNameDiv = $("<button class='drinksbutton'>" + drinkName + "</button>" + "</br>")
    drinkResult.append(drinkNameDiv);
    drinkNameDiv.attr("id", "id" + id)
    drinkNameDiv.on("click", function () {
      $("#drinkTitle").text(drinkName)
      getIngredientMeasurement(response)
      $("#ingredientTitle").empty()
      $("#ingredientTitle").append("Ingredients and Measurement:" + "<br>")
      $("#drink-instruction").empty()
      $("#instructionsTitle").empty()
      $("#instructionsTitle").append("Instructions:" + "<br>")
      var instruction = response.drinks[0].strInstructions;
      var instructionDiv = $("<div>" + instruction + "</div>")
      $("#drink-instruction").append(instructionDiv)
      console.log(instruction);
      var drinkThumb = curDrink.strDrinkThumb
      var drinkImages = $("#drink-images").attr("src", drinkThumb)
    })

    function getIngredientMeasurement(response) {
      var drinkIngredient = {};
      for (var i = 1; i < 15; i++) {
        var curIngredient = curDrink["strIngredient" + i];
        if (curIngredient !== null) {
          drinkIngredient[curIngredient] = curDrink["strMeasure" + i];
          if (drinkIngredient[curIngredient] === null) {
            drinkIngredient[curIngredient] = "Optional"
          }
        }
      }
      $("#drinkIngredientMeasurement").empty();
      console.log(drinkIngredient)
      for (var [key, value] of Object.entries(drinkIngredient)) {
        console.log(key, value)
        var ingredientDiv = $("<div>" + key + ": " + value + "</div>");
        $("#drinkIngredientMeasurement").append(ingredientDiv);
      }
    };
  })
}
