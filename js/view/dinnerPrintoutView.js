var DinnerPrintoutView = function(container, model) {

this.update = function() {  
    
    menu = model.getFullMenu();
    container.empty();
  
    for (i in menu) {
        
        model.getDish(menu[i], function(dish){
            
            var dishImg = dish.image;
            var dishName = dish.title;
            var dishDescription = dish.instructions;
        
            dishPrintout = '<div class="col-sm-12"><div class="col-xs-3"><p><img src="' + dishImg + '" style="width: 100%;"></p></div><div class="col-xs-4"><div class = "dishname-header"><h3>' + dishName + '</h3></div><p>' + dishDescription + '</p></div><div class="col-xs-5"><div class = "preparation-header"><h3>PREPARATION</h3></div><p>' + dishDescription + '</p></div></div>'

            container.append(dishPrintout);
            
         }, function(error) {
         /* do something with the error */
        });
    }
    
    /*var allDishes = model.getDishes();
    var starterID = model.getSelectedDish("starter");
    var maindishID = model.getSelectedDish("main dish"); 
    var dessertID = model.getSelectedDish("dessert"); 
    var starterPrintout;
      
    starterPrintout = '<div class="col-sm-12"><div class="col-sm-2"><img src="images/' + model.getDish(starterID).image + '"></div><div class="col-sm-4"><div class = "dishname-header"><h3>' + model.getDish(starterID).name + '</h3></div><p>' + model.getDish(starterID).description + '</p></div><div class="col-sm-5"><div class = "preparation-header"><h3>PREPARATION</h3></div><p>' + model.getDish(starterID).description + '</p></div></div>'
                                                              
    container.empty();
    container.append(starterPrintout);
    
    
    var maindishPrintout;
      
    maindishPrintout = '<div class="col-sm-12"><div class="col-sm-2"><img src="images/' + model.getDish(maindishID).image + '"></div><div class="col-sm-4"><div class = "dishname-header"><h3>' + model.getDish(maindishID).name + '</h3></div><p>' + model.getDish(maindishID).description + '</p></div><div class="col-sm-5"><div class = "preparation-header"><h3>PREPARATION</h3></div><p>' + model.getDish(maindishID).description + '</p></div></div>'
                                                              
    container.append(maindishPrintout);
    
    
    var dessertPrintout;
      
    dessertPrintout = '<div class="col-sm-12"><div class="col-sm-2"><img src="images/' + model.getDish(dessertID).image + '"></div><div class="col-sm-4"><div class = "dishname-header"><h3>' + model.getDish(dessertID).name + '</h3></div><p>' + model.getDish(dessertID).description + '</p></div><div class="col-sm-5"><div class = "preparation-header"><h3>PREPARATION</h3></div><p>' + model.getDish(dessertID).description + '</p></div></div>'
                                                              
    container.append(dessertPrintout);*/
    
}
    
    this.update();
    model.addObserver(this);
}