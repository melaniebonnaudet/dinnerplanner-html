var AllDishesView = function (container, model) {    
    
        var key;
        var dishes;
        var allDishes = model.getDishes();

        for (key in allDishes) {
            dishes = '<div class="col-md-3" name="dish" id="a'+ key +'"><div class="thumbnail"><img src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            container.append(dishes);
            }
}

var StartersView = function (container, model) {    
       
        var key;
        var dishes;
        var allDishes = model.getDishes();

        for (key in allDishes) {
            dishes = '<div class="col-md-3" id="a'+ key +'"><div class="thumbnail"><img src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            
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
            dishes = '<div class="col-md-3" id="a'+ key +'"><div class="thumbnail"><img src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            
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
            dishes = '<div class="col-md-3" id="a'+ key +'"><div class="thumbnail"><img src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            
            if (allDishes[key].type == "dessert") {
                 container.append(dishes);
            }  
        }  
}