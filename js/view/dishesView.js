var AllDishesView = function (container, model) {    
    
    this.update = function() {
        
        this.type = container.find("#typeOfDish");
        this.search = container.find("#searchInput");
        
        var typeVal = this.type.val();
        var searchVal = this.search.val();
        //console.log(typeVal);
        //console.log(searchVal);
         
        var key;
        var dish;
             
        var _this = this;
        this.dishContainer = container.find("#allDishesView");
        
        this.dishContainer.empty();
        
        var loader = $("<div>");
        loader.attr("class", "loader");
        this.dishContainer.append(loader);
        
        model.getAllDishes(typeVal, searchVal, function(dishes){
            console.log(dishes);
            
            if (dishes.results.length == 0) {
                alert("no results for this search!");
            }
            
            container.find(".loader").hide();
            
            for (key in dishes.results) {
                /*if ((key+1) % 4 == 0) {
                    var rowWrapper = "<div class='row'>"
                }*/
                dish = '<div class="col-md-3 dishButton" name="dish" id="'+ dishes.results[key].id +'" value="'+ dishes.results[key].id +'"><div class="thumbnail"><img value="'+ dishes.results[key].id +'" src="https://spoonacular.com/recipeImages/' + dishes.results[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + dishes.results[key].title + '</p></div></div></div>';       
                _this.dishContainer.append(dish);
            }
            }, function(error) {
             /* do something with the error */
        });

    
        this.dishButton = container.find(".dishButton");
        
    }
    
    this.update();
    //model.addObserver(this);
    
}

/*var StartersView = function (container, model) {    
       
        var key;
        var dishes;
        var allDishes = model.getDishes();

        for (key in allDishes) {
            dishes = '<div class="col-md-3" id="a'+ allDishes[key].id +'"><div class="thumbnail"><img src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            
            if (allDishes[key].type == "starter") {
                 container.append(dishes);
            }  
        }  
}

var MainDishView = function (container, model) {    
       
        var key;
        var dishes;
        var allDishes = model.getDishes();

        for (key in allDishes) {
            dishes = '<div class="col-md-3" id="a'+ allDishes[key].id +'"><div class="thumbnail"><img src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            
            if (allDishes[key].type == "main dish") {
                 container.append(dishes);
            }  
        }  
}

var DessertsView = function (container, model) {    
       
        var key;
        var dishes;
        var allDishes = model.getDishes();

        for (key in allDishes) {
            dishes = '<div class="col-md-3" id="a'+ allDishes[key].id +'"><div class="thumbnail"><img src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            
            if (allDishes[key].type == "dessert") {
                 container.append(dishes);
            }  
        }  
}*/