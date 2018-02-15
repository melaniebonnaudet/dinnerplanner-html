var DishDetailView = function (container, model) {    
    
    var dishDetail;
    var allDishes = model.getDishes();
    
    
        dishDetail = '<div class = "dishname-header"><h3>' + allDishes[0].name + '</h3></div><img src="images/' + allDishes[0].image + '" id="imgDishDetail"><div class="caption"><p>Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum, ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris, dum exprimunt innumera simulacra, quae finxere fabulae theatrales.</p></div><button class="btn btn-warning" id="backToAllDishesView">back to search</button><div class = "preparation-header"><h3>PREPARATION</h3><p>'+ allDishes[0].description +'</p></div>'
        
        container.append(dishDetail);
      
    
}