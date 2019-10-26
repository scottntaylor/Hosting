$("#drink-button").on("click", function () { 
    let ingredient = $("#textarea-drink").val();
  findDrinkByIngredient(ingredient);
  var cocktailID = "15346";
  var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailID;
  
});
  
function findDrinkByIngredient(ingredient) { 
    var ingredientURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
$.ajax({
      url: ingredientURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      for (var i=0; i < 5; i++){
          var IDnum = response.drinks[i].idDrink;
          console.log(IDnum);
          findRecipe(IDnum);
      }
    });
};

function findRecipe(IDnum){
var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + IDnum;
    $.ajax({
        url: cocktailURL,
        method: "GET"
    }).then(function(response){
  console.log(response);
    });
};

