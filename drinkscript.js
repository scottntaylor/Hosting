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
      findRecipe(IDnum);
    }
  });
};

function findRecipe(IDnum) {
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + IDnum;
  $.ajax({
    url: cocktailURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var drinkName = response.drinks[0].strDrink;
    console.log(drinkName);
    var instruction = response.drinks[0].strInstructions;
    console.log(instruction);
    var drinkData = response.drinks[0];
    for (var i = 0; i <drinkData.strIngredient[i]; i++) {
      var ingredientArray = drinkData.strIngredient[i];
      console.log(ingredientArray);
    }
    //var ingArray = [drinkData.strIngredient1, drinkData.strIngredient2, drinkData.strIngredient3, ];
    //console.log(ingArray);
    
// var ingredient = drinkData.forEach
// if (ingredient != null) {
// return ingredient;
// console.log(ingredient);

//     };
    
    //for (var i = 0; i < 15; i ++){
    //   var ingArray = 
    // }
    //var ingredients = response.
    //var measurements = response. (array)
  });
};


// let keys = object.keys(obj);
//keys.forEach(function(key){
  //for (var i = 0; i <keys.length; i++){
//if (key.indexOf('a') !=null){
  //console.log(key);
//}
//});