var AllDishesView = function (container, model) {    
    
    this.update = function() {
        
        container.empty();
        var typeVal = document.getElementById("typeOfDish").value;
        var searchVal = document.getElementById("searchInput").value;
    
        //console.log(typeVal);
        //console.log(searchVal);
        
        var dishes = model.getAllDishes(typeVal, searchVal);
        
        //console.log(model.getAllDishes(typeVal, searchVal));
    
        var key;
        var allDishes = model.getAllDishes(typeVal, searchVal);

        for (key in allDishes) {
            dishes = '<div class="col-md-3 dishButton" name="dish" id="'+ allDishes[key].id +'" value="'+ allDishes[key].id +'"><div class="thumbnail"><img value="'+ allDishes[key].id +'" src="images/' + allDishes[key].image + '" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';       
            container.append(dishes);
            }
    
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