<?

/* recipe loader for TP9 */

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];

if ($name == "Best Big, Fat, Chewy Chocolate Chip Cookie") {
  
   if ($list == "Ingredients") {
     include "ingredients.html";
     
   } elseif ($list == "Equipment") {
     include "equipment.html";
     
   } elseif ($list =="Directions") {
     include "directions.html";
     
   } else {
     echo "1";
   }
  
  
  
  } elseif ($name == "Saskia's Cauliflower Mac") {
	
	if ($list == "Ingredients") {
		include "ingredientsS.html";
		
	} elseif ($list == "Equipment") {
		include "equipmentS.html";
		
	} elseif ($list == "Directions") {
		include "directionsS.html";
		
	} else {
    
		echo "1";
		
	}
  
  
  
  } elseif ($name == "Rachels French Crepes") {
	
	if ($list == "Ingredients") {
		include "ingredientsR.html";
		
	} elseif ($list == "Equipment") {
		include "equipmentR.html";
		
	} elseif ($list == "Directions") {
		include "directionsR.html";
		
	} else {
    
		echo "1";
		
	}
  
  
  
  
  
  
} else {
  
 echo "0";
  
}