var DinnerOverviewView = function(container, model) {

this.update = function() {
   
    var i;
    
    var dishName;
    var dishImg;
    
    var menu = model.getFullMenu();
    var guests = model.getNumberOfGuests();
    var dishPrice = 0;
    var totalMenuPrice = 0;
    $("#OverviewDishes").empty();
    
    for (i in menu) {
        model.getDish(menu[i], function(dish){
             /* do something with new dishes */ 
            
            console.log(dish);
            
            dishName = dish.title;
            dishImg = dish.image;
            
            dishPrice = (dish.pricePerServing / dish.servings) * guests;
            dishPrice = dishPrice.toFixed(2);
            totalMenuPrice += parseInt(dishPrice);
            
            $("#totalPrice").text("SEK " + totalMenuPrice);
            
             var menuDishElement =  '<div class="col-md-2"><div class="thumbnail"><img src="' + dishImg + '" id="imgDinnerOverview"><div class="caption"><p>' + dishName + '</p><p id="dishPrice">SEK ' + dishPrice + '</p></div></div></div>'
        
         $("#OverviewDishes").append(menuDishElement);
            }, function(error) {
             /* do something with the error */
            });
    }
    
    /*for (i in menu) {
        var dishName = model.getDish(menu[i]).name;
        var dishImg = model.getDish(menu[i]).image;
        
        var dishPrice = 0;
        for (j in model.getDish(menu[i]).ingredients) {
                    dishPrice += model.getDish(menu[i]).ingredients[j].price*guests;
                }

         var menuDishElement =  '<div class="col-md-2"><div class="thumbnail"><img src="images/' + dishImg + '" id="imgDinnerOverview"><div class="caption"><p>' + dishName + '</p><p id="dishPrice">SEK ' + dishPrice + '</p></div></div></div>'
        
         $("#OverviewDishes").append(menuDishElement);
    }*/
    
    //$("#totalPrice").text("SEK " + model.getTotalMenuPrice());
    
    }
    
    this.update();
    model.addObserver(this);
    
}