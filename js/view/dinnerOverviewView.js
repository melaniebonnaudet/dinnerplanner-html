var DinnerOverviewView = function(container, model) {

this.update = function() {
   
    var i;
    var j;
    var menu = model.getFullMenu();
    var guests = model.getNumberOfGuests();
    $("#OverviewDishes").empty();
    
    for (i in menu) {
        var dishName = model.getDish(menu[i]).name;
        var dishImg = model.getDish(menu[i]).image;
        
        var dishprice = 0;
        for (j in model.getDish(menu[i]).ingredients) {
                    dishPrice += model.getDish(menu[i]).ingredients[j].price*guests;
                }

         var menuDishElement =  '<div class="col-md-2"><div class="thumbnail"><img src="images/' + dishImg + '" id="imgDinnerOverview"><div class="caption"><p>' + dishName + '</p><p id="dishPrice">SEK ' + dishPrice + '</p></div></div></div>'
        
         $("#OverviewDishes").append(menuDishElement);
    }
    
    $("#totalPrice").text("SEK " + model.getTotalMenuPrice());
    /*var starterID;
    var starterName;
    var starterImg;
    var menuStarterElement;
    
    starterID = model.getSelectedDish("starter"); 
    maindishID = model.getSelectedDish("main dish");
    dessertID = model.getSelectedDish("dessert"); 
    
    
        starterName = model.getDish(starterID).name;
        starterImg = model.getDish(starterID).image;

        var maindishID;
        var maindishName;
        var maindishImg;
        var menuMaindishElement;

        maindishName = model.getDish(maindishID).name;
        maindishImg = model.getDish(maindishID).image;

        var dessertID;
        var dessertName;
        var dessertImg;
        var menuDessertElement;

        dessertName = model.getDish(dessertID).name;
        dessertImg = model.getDish(dessertID).image;

         menuStarterElement =  '<div class="thumbnail"><img src="images/' + starterImg + '" id="imgDinnerOverview"><div class="caption"><p>' + starterName + '</p><p id="starterPrice"></p></div></div>'

        $("#OverviewStarter").empty();
        $("#OverviewStarter").append(menuStarterElement);

         menuMaindishElement =  '<div class="thumbnail"><img src="images/' + maindishImg + '" id="imgDinnerOverview"><div class="caption"><p>' + maindishName + '</p><p id="maindishPrice"></p></div></div>'

        $("#OverviewMaindish").empty();
        $("#OverviewMaindish").append(menuMaindishElement);

         menuDessertElement =  '<div class="thumbnail"><img src="images/' + dessertImg + '" id="imgDinnerOverview"><div class="caption"><p>' + dessertName + '</p><p id="dessertPrice"></p></div></div>'

        $("#OverviewDessert").empty();
        $("#OverviewDessert").append(menuDessertElement);

            var i;
            var starterPrice = 0;
            var maindishPrice = 0;
            var dessertPrice = 0;

            var guests = model.getNumberOfGuests();

            for (i in model.getDish(starterID).ingredients) {
                starterPrice += model.getDish(starterID).ingredients[i].price*guests;
            }

            for (i in model.getDish(maindishID).ingredients) {
                maindishPrice += model.getDish(maindishID).ingredients[i].price*guests;
            }

            for (i in model.getDish(dessertID).ingredients) {
                dessertPrice += model.getDish(dessertID).ingredients[i].price*guests;
            }

            $("#totalPrice").text("SEK " + model.getTotalMenuPrice());

            $("#starterPrice").text("SEK " + starterPrice);
            $("#maindishPrice").text("SEK " + maindishPrice);
            $("#dessertPrice").text("SEK " + dessertPrice);*/
        
    }
    
    this.update();
    model.addObserver(this);
    
}