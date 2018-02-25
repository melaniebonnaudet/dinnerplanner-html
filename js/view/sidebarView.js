var SidebarView = function(container, model) { 
    
    this.guestinput = container.find("#guests");
    this.dishesInSidebar = container.find("#dishesInSidebar");

    //this.starterInSidebar = container.find("#starterInSidebar");
    //this.mainDishInSidebar = container.find("#mainDishInSidebar");
    //this.dessertInSidebar = container.find("#dessertInSidebar");
    this.totalPriceInSidebar = container.find("#total_price");

     //this.guestinput.attr("value", model.getNumberOfGuests());
    this.update = function() {
    
        this.guestinput.attr("value", guests);
        var guests = model.getNumberOfGuests();
        
        dishPrice = 0;
        menu = model.getFullMenu();

        this.dishesInSidebar.empty();
        for (i in menu) {
            dishName = model.getDish(menu[i]).name
            //dish = $("<div class='col-xs-8'></div>").text(dishName);
            
            for (j in model.getDish(menu[i]).ingredients) {
                    dishPrice += model.getDish(menu[i]).ingredients[j].price*guests;
                }

            //price = $("<div class='col-xs-4'></div>").text(dishPrice);
            
            //this.dishesInSidebar.empty();
            //this.dishesInSidebar.append(dish);
            //this.dishesInSidebar.append(price);     
           
            this.dishesInSidebar.append("<div class='col-xs-8'>" + dishName + "</div><div class='col-xs-4'>" + dishPrice + "</div>")
        }
        
        this.menuPrice = $("<p class='price'></p>");
        this.menuPrice.text("SEK " + model.getTotalMenuPrice());
        this.dishesInSidebar.append(this.menuPrice);

        /*var starterID;
        var starterName;
        var starter;

        var mainDishID;
        var mainDishName;
        var mainDish;

        var dessertID;
        var dessertName;
        var dessert;
      
        starterID = model.getSelectedDish("starter");
        console.log(starterID);
        mainDishID = model.getSelectedDish("main dish");
        dessertID = model.getSelectedDish("dessert");  
            
            starterName = model.getDish(starterID).name;

            starter = $("<div class='col-xs-8'></div>").text(starterName);
            this.starterInSidebar.empty();
            this.starterInSidebar.append(starter);

            mainDishName = model.getDish(mainDishID).name;

            mainDish = $("<div class='col-xs-8'></div>").text(mainDishName);
            this.mainDishInSidebar.empty();
            this.mainDishInSidebar.append(mainDish);

            dessertName = model.getDish(dessertID).name;

            dessert = $("<div class='col-xs-8'></div>").text(dessertName);
            this.dessertInSidebar.empty();
            this.dessertInSidebar.append(dessert);

            model.getAllIngredients();
            this.menuPrice = $("<p class='price'></p>");
            this.totalPriceInSidebar.empty();
            this.totalPriceInSidebar.append(this.menuPrice);

            starterPriceElement = $("<div class='col-xs-4'></div>");
            maindishPriceElement = $("<div class='col-xs-4'></div>");
            dessertPriceElement = $("<div class='col-xs-4'></div>");
            this.starterInSidebar.append(starterPriceElement);   
            this.mainDishInSidebar.append(maindishPriceElement);
            this.dessertInSidebar.append(dessertPriceElement);

            this.guestinput.attr("value", guests);

            var guests = model.getNumberOfGuests();
            var i;
            var starterPrice = 0;
            var maindishPrice = 0;
            var dessertPrice = 0;

            for (i in model.getDish(starterID).ingredients) {
                starterPrice += model.getDish(starterID).ingredients[i].price*guests;
            }

             for (i in model.getDish(mainDishID).ingredients) {
               maindishPrice += model.getDish(mainDishID).ingredients[i].price*guests;
            }

              for (i in model.getDish(dessertID).ingredients) {
                dessertPrice += model.getDish(dessertID).ingredients[i].price*guests;
            }

            starterPriceElement.text("SEK " + starterPrice)    
            maindishPriceElement.text("SEK " + maindishPrice)
            dessertPriceElement.text("SEK " + dessertPrice)

            this.menuPrice.text("SEK " + (starterPrice + maindishPrice + dessertPrice));
            //this.menuPrice.text("SEK " + (starterPrice + model.getTotalMenuPrice());*/ 

    }
    
    this.update();
    model.addObserver(this);
      
}