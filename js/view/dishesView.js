var AllDishesView = function (container, model) {    
    
    this.update = function() {
        
        container.empty();
        //var typeVal = document.getElementById("typeOfDish").value;
        //var searchVal = document.getElementById("searchInput").value;
        
        var typeVal = $("#typeOfDish").val();
        var searchVal = $("#searchInput").val();
        
        var key;
        var dish;
    
        //console.log(typeVal);
        //console.log(searchVal);
        
        var dishes = model.getAllDishes(typeVal, searchVal, function(dishes){
            console.log(dishes);
            
            for (key in dishes.results) {
            dish = '<div class="col-md-3 dishButton" name="dish" id="'+ dishes.results[key].id +'" value="'+ dishes.results[key].id +'"><div class="thumbnail"><img value="'+ dishes.results[key].id +'" src="https://spoonacular.com/recipeImages/' + dishes.results[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + dishes.results[key].title + '</p></div></div></div>';       
            container.append(dish);
            }
            }, function(error) {
             /* do something with the error */
        });
        
    
       
        //var allDishes = model.getAllDishes(typeVal, searchVal);

        /*for (key in allDishes) {
            dishes = '<div class="col-md-3 dishButton" name="dish" id="'+ allDishes[key].id +'" value="'+ allDishes[key].id +'"><div class="thumbnail"><img value="'+ allDishes[key].id +'" src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            container.append(dishes);
            }*/
    
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