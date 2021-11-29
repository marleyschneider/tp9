// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(recipeName, listName, whereTo) {

  // 1. creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // 2. define the fromFile variable with the passed recipe name and list 
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
  
  console.log("From URL: " + fromFile);


  // 3. defines the GET/POST method, the source, and the async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // 4. provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

      document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

    } else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange function

  // 5. let's go -- initiate request and process the responses
  ajax.send();

}


//new Recipe object

function Recipe(recipeName, contributorName, imageURL) {

  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;

  this.displayRecipe = function() {

    document.querySelector("#titleBanner h1").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = "Contributed by " + this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.img + ")";

   loadFileInto(this.recipe, "Ingredients", "#Ingredients ul");
    loadFileInto(this.recipe, "Equipment", "#Equipment ul");
    loadFileInto(this.recipe, "Directions", "#Directions ol");

  }

}

BestBigChewyChocolateChipCookie = new Recipe("Best Big, Fat, Chewy Chocolate Chip Cookie", "Marley", "https://images.unsplash.com/photo-1582385760710-4300982782c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
AnotherRecipe = new Recipe();

SaskiasCauliflowerMac = new Recipe("Saskia's Cauliflower Mac", "Saskia", "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
AnotherRecipe = new Recipe();

RachelsFrenchCrepes = new Recipe("Rachels French Crepes", "Rachel", "https://media.istockphoto.com/photos/arc-de-triomphe-paris-picture-id135034702?b=1&k=20&m=135034702&s=170667a&w=0&h=Y6w6ohcqRzhNQBFyQPCPAUyzzvVbcSLl9Esa2AwUX4o=");
AnotherRecipe = new Recipe();




window.onload = function() {

  document.querySelector("#titleBanner h1").classList.add("title");

  document.querySelector("#Ingredients").onclick = function() {
    document.querySelector("#Ingredients ul").classList.toggle("showMe");
  }

  document.querySelector("#Equipment").onclick = function() {
    document.querySelector("#Equipment ul").classList.toggle("showMe");
  }

  document.querySelector("#Directions").onclick = function() {
    document.querySelector("#Directions ol").classList.toggle("showMe");
  }


  document.querySelector("#titleBanner h1").onclick = function() {
    this.classList.toggle("title");
  }

  document.querySelector("#copyright").innerHTML += "<p><em>Recipe shown without permission from creator, my apologies!</em></p>";


  document.querySelector("#r1").onclick = function() {
    BestBigChewyChocolateChipCookie.displayRecipe();

  }

  document.querySelector("#r2").onclick = function() {
    SaskiasCauliflowerMac.displayRecipe();
  }

  document.querySelector("#r3").onclick = function() {
    RachelsFrenchCrepes.displayRecipe();
  }




} // end of window.onload