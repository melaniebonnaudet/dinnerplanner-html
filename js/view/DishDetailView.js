var DishDetailView = function (container, model) {    
    
    var dishDetail;
    //var allDishes = model.getDishes();
    //var dish = model.getDish(model.getDishID());
    
    dishDetail = '<div class = "dishname-header"><h3 id="dishDetailName"></h3></div><img id="imgDishDetail"><div class="caption"><p id="imgText"></p></div><button class="btn btn-warning" id="backToAllDishesView">back to search</button><div class = "preparation-header"><h3>PREPARATION</h3><p id="dishDetailDescription"></p></div>'
        
    container.append(dishDetail);
        
    this.update = function() {
        //var dish = model.getDish(model.getDishID());
        
        model.getDish(model.getDishID(), function(dish){
             /* do something with new dishes */ 
                $("#imgDishDetail").attr("src", dish.image);
                $("#dishDetailName").text(dish.title);
                $("#dishDetailDescription").text(dish.instructions);
                $("#imgText").text("Preparation time: " + dish.readyInMinutes + " min");
            }, function(error) {
             /* do something with the error */
        });
        
        //console.log(model.getDishID());
      
       
     }
     
    this.update();
    model.addObserver(this);
}