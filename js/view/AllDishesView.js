var AllDishesView = function (container, model) {

    
    
var dish = model.getDish(1);
//console.log(dish.name);
//container.find("#dishName").html(dish.name);   
    
var appendshit = '<div class="col-md-2"><div class="thumbnail"><img src="images/bakedbrie.jpg" alt="Baked Brie" style="width:100%"<div class="caption"><p id="dishName">' + dish.name + '</p></div></div></div>';
    
$(document).ready(function(){
    
        $("#allDishesView").append(appendshit);
});
    
    
//var dishes = model.getAllDishes('starter')
    // for (i, i < dishes.length, i++)
    //dishes[i]
    
}