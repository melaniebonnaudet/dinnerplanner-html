var DinnerOverviewView = function(container, model) {
    
    var starterID;
    var starterName;
    var starterImg;
    var menuStarterElement;
    
    starterID = model.getSelectedDish("starter"); 
    starterName = model.getDish(starterID).name;
    starterImg = model.getDish(starterID).image;
    
    var maindishID;
    var maindishName;
    var maindishImg;
    var menuMaindishElement;
    
    maindishID = model.getSelectedDish("main dish"); 
    maindishName = model.getDish(maindishID).name;
    maindishImg = model.getDish(maindishID).image;
    
    var dessertID;
    var dessertName;
    var dessertImg;
    var menuDessertElement;
    
    dessertID = model.getSelectedDish("dessert"); 
    dessertName = model.getDish(dessertID).name;
    dessertImg = model.getDish(dessertID).image;
    
    var guests = model.getNumberOfGuests();
    var i;
    var starterPrice = 0;
    var maindishPrice = 0;
    var dessertPrice = 0;
        
    for (i in model.getDish(starterID).ingredients) {
        starterPrice += model.getDish(starterID).ingredients[i].price*guests;
    }
    
    menuStarterElement =  '<div class="thumbnail"><img src="images/' + starterImg + '" id="imgDinnerOverview"><div class="caption"><p>' + starterName + '</p><p id="dishprice">SEK ' + starterPrice + '</p></div></div>'
    
    $("#OverviewStarter").append(menuStarterElement);
    
    for (i in model.getDish(maindishID).ingredients) {
        maindishPrice += model.getDish(maindishID).ingredients[i].price*guests;
    }
    
    menuMaindishElement =  '<div class="thumbnail"><img src="images/' + maindishImg + '" id="imgDinnerOverview"><div class="caption"><p>' + maindishName + '</p><p id="dishprice">SEK ' + maindishPrice + '</p></div></div>'
    
    $("#OverviewMaindish").append(menuMaindishElement);
    
    for (i in model.getDish(dessertID).ingredients) {
        dessertPrice += model.getDish(dessertID).ingredients[i].price*guests;
    }
    
    menuDessertElement =  '<div class="thumbnail"><img src="images/' + dessertImg + '" id="imgDinnerOverview"><div class="caption"><p>' + dessertName + '</p><p id="dishprice">SEK ' + dessertPrice + '</p></div></div>'
    
    $("#OverviewDessert").append(menuDessertElement);
    
    $("#totalPrice").append("SEK " + model.getTotalMenuPrice());
}