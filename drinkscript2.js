//drink alternative

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
        console.log("finddrinkbyID", response);
        for (var i = 0; i < 5; i++) {
            var IDnum = response.drinks[i].idDrink;
            console.log("idnum", IDnum);
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
        console.log("findrecipe", response);
        var drinkName = response.drinks[0].strDrink;
        console.log("drinkname", drinkName);
        var instruction = response.drinks[0].strInstructions;
        console.log("instruction", instruction);
        var drinkData = response.drinks[0];
        for (var i = 0; i < drinkData.strIngredient[i]; i++) {
            var ingredientArray = drinkData.strIngredient[i];
            console.log("ingredientarray", ingredientArray);
        }

        for (var j = 0; j < 14; j++) {
            if (response.drinks[j].strIngredient+j) {
                
            }
        }
 
    });
};
