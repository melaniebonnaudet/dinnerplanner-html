var AllDishesView = function (container, model) {    
    
 
$(document).ready(function(){
    
    var key;
    var dishes;
    var allDishes = model.getDishes();
    
    for (key in allDishes) {
        dishes = '<div class="col-md-2"><div class="thumbnail"><img src="images/' + allDishes[key].image + '" alt="Baked Brie" style="width:100%"><div class="caption"><p id="dishName">' + allDishes[key].name + '</p></div></div></div>';
        $("#allDishesView").append(dishes);
    }
    
});
    
}