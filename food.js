//global variables

// user enters word into search bar


// grab text value and use to create queryURL
// on search button click search or filter for recipes using ajax call
// return 10 recipe links/names with buttons on the left
// loop to append to list divs
// on click button of a recipe link/name append recipe to the right side
// click on favorites button to save recipe

var APIKEY = "9aacd4f040604f24bdf021521839307c"

//CLICK HANDLER
$("#food-button").on("click", function (event) {
    clearSearch();
    event.preventDefault();
    var searchVal = $("#textarea1").val();
    console.log(searchVal);
    getFoodData(searchVal);
})

//CLEAR RECIPE AREA
function clearRecipe() {
    $("#foodText").empty();
  }

  //CLEAR SEARCH AREA
function clearSearch() {
    $("#searchresults").empty();
  }

//GET FOOD DATA USING SEARCH VARIABLE
function getFoodData(searchVal) {
    var queryParams = searchVal;
    console.log("queryParams: " + queryParams);
    var queryURL = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=“${queryParams}“&?&apiKey=${APIKEY}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        for (var i = 1; i <= 5; i++) {

            var recipename = $("<button class='recipebutton'>" + response.results[i].title + "</button>").appendTo(resultdiv);
            console.log(recipename);
            var resultdiv = "#Result" + i;
            console.log("resultdiv" + resultdiv);
        }

        $(".recipebutton").on("click", function (event) {
            clearRecipe();
            var reciperightside = $("<div>" + this.textContent + "</div>").appendTo(foodText);
        }) 
    })
}



        // //CLICK HANDLER
        // $("#recipebutton").on("click", function (event) {
        //     event.preventDefault();
        //     alert("button clicked");
        // })