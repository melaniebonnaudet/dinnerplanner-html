var DinnerPrintoutView = function(container, model) {

this.update = function() {  
    
    menu = model.getFullMenu();
    container.empty();
  
    for (i in menu) {
        dishPrintout = '<div class="col-sm-12"><div class="col-sm-2"><img src="images/' + model.getDish(menu[i]).image + '"></div><div class="col-sm-4"><div class = "dishname-header"><h3>' + model.getDish(menu[i]).name + '</h3></div><p>' + model.getDish(menu[i]).description + '</p></div><div class="col-sm-5"><div class = "preparation-header"><h3>PREPARATION</h3></div><p>' + model.getDish(menu[i]).description + '</p></div></div>'

        container.append(dishPrintout);
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