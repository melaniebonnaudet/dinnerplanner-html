var DishDetailView = function (container, model) {    
    
    var dishDetail;
    //var allDishes = model.getDishes();
    //var dish = model.getDish(model.getDishID());
    
    dishDetail = '<div class = "dishname-header"><h3 id="dishDetailName"></h3></div><img id="imgDishDetail"><div class="caption"><p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum, ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris, dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p></div><button class="btn btn-warning" id="backToAllDishesView">back to search</button><div class = "preparation-header"><h3>PREPARATION</h3><p id="dishDetailDescription"></p></div>'
        
    container.append(dishDetail);
        
    this.update = function() {
        var dish = model.getDish(model.getDishID());
        $("#imgDishDetail").attr("src", "images/" + dish.image);
        $("#dishDetailName").text(dish.name);
        $("#dishDetailDescription").text(dish.description);        
     }
     
    this.update();
    model.addObserver(this);
}