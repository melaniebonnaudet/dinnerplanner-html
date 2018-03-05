var SidebarView = function(container, model) { 
    
    var _this = this;
    this.guestinput = container.find("#guests");
    this.dishesInSidebar = container.find("#dishesInSidebar");

    //this.starterInSidebar = container.find("#starterInSidebar");
    //this.mainDishInSidebar = container.find("#mainDishInSidebar");
    //this.dessertInSidebar = container.find("#dessertInSidebar");
    this.totalPriceInSidebar = container.find("#total_price");

     //this.guestinput.attr("value", model.getNumberOfGuests());
    this.update = function() {
    
        _this.guestinput.attr("value", guests);
        var guests = model.getNumberOfGuests();
        
        this.menuPrice = $("<p class='price'></p>");
        var dishPrice = 0;
        var totalMenuPrice = 0;
        var _updateScope = this;
        var menu = model.getFullMenu();
        var dishName;
        var i;

        _this.dishesInSidebar.empty();
        
        /*var loader = $("<div>");
        loader.attr("class", "loader");
        _this.dishesInSidebar.append(loader);*/
        
        for (i in menu) {
    
            model.getDish(menu[i], function(dishes){
                
                
                //container.find(".loader").hide();

                dishName = dishes.title;
                dishPrice = (dishes.pricePerServing / dishes.servings) * guests;
                dishPrice = dishPrice.toFixed(2);
                
                totalMenuPrice += parseInt(dishPrice);
                
                _this.dishesInSidebar.append("<div class='col-xs-8'>" + dishName + "</div><div class='col-xs-4'>" + dishPrice + "</div>");
                
                _updateScope.menuPrice.text("SEK " + totalMenuPrice);
                
                //var totalMenuPrice = 0;
                //totalMenuPrice += (dishes.pricePerServing / dishes.servings) * guests;
                
                }, function(error) {
                 /* do something with the error */
            });
            
             }
        
        this.dishesInSidebar.append(this.menuPrice);
            
            /*dishPrice = 0;
            dishName = model.getDish(menu[i]).name;*/
            
            //dish = $("<div class='col-xs-8'></div>").text(dishName);
              
            /*for (j in model.getDish(menu[i]).ingredients) {
                    dishPrice += model.getDish(menu[i]).ingredients[j].price*guests;
                }*/

            //price = $("<div class='col-xs-4'></div>").text(dishPrice);
            
            //this.dishesInSidebar.empty();
            //this.dishesInSidebar.append(dish);
            //this.dishesInSidebar.append(price);       
        
        
       /* this.menuPrice = $("<p class='price'></p>");
        //this.menuPrice.text("SEK " + model.getTotalMenuPrice());
        
        var _updateScope = this;
        var totalMenuPrice = 0;
        var dishPrice = 0;
        
    
        var menuDishes = model.getFullMenu();

        console.log("num of dishes "+menuDishes.length);
        for (i in menuDishes) {
 
            model.getDish(menuDishes[i], function(dish){
     
               
                dishPrice += (dish.pricePerServing / dish.servings) * model.getNumberOfGuests();
                totalMenuPrice += dishPrice;
                //console.log(this.getNumberOfGuests());
                
                console.log("idx "+i+"price "+dishPrice+" total "+totalMenuPrice);
                //console.log(_this.getNumberOfGuests());
                
                
                _updateScope.menuPrice.text("SEK " + dishPrice);
                
                }, function(error) {
                
                });
        }
        
        this.dishesInSidebar.append(this.menuPrice);*/

    }
    
    this.update();
    model.addObserver(this);
      
}