var DishDetailView = function (container, model) {    
    
    
    this.dishDetailView = container.find("#dishDetailView");
    this.loader = container.find(".loader");
    this.detailsContainer = container.find(".detailsContainer");
    var _this = this;
    
    
    var dishDetail;
    //var allDishes = model.getDishes();
    //var dish = model.getDish(model.getDishID());
    
    dishDetail = '<div class = "dishname-header"><h3 id="dishDetailName"></h3></div><img id="imgDishDetail"><div class="caption"><p id="imgText"></p></div><button class="btn btn-warning" id="backToAllDishesView">back to search</button><div class = "preparation-header"><h3>PREPARATION</h3><p id="dishDetailDescription"></p></div>'
        
    this.dishDetailView.append(dishDetail);
    
    this.imgDishDetail = container.find("#imgDishDetail");
    this.dishDetailName = container.find("#dishDetailName");
    this.dishDetailDescription = container.find("#dishDetailDescription");
    this.imgText = container.find("#imgText");
    
        
    this.update = function() {
        //var dish = model.getDish(model.getDishID());
        
        _this.loader.show();
        _this.detailsContainer.hide();
        
        model.getDish(model.getDishID(), function(dish){
             /* do something with new dishes */ 
                _this.loader.hide();
                _this.detailsContainer.show();
            
                _this.imgDishDetail.attr("src", dish.image);
                _this.dishDetailName.text(dish.title);
                _this.dishDetailDescription.text(dish.instructions);
                _this.imgText.text("Preparation time: " + dish.readyInMinutes + " min");
            }, function(error) {
             /* do something with the error */
        });
        
        //console.log(model.getDishID());
      
       
     }
     
    this.update();
    model.addObserver(this);
}