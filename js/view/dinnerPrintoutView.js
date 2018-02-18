var DinnerPrintoutView = function(container, model) {

this.update = function() {    
    var allDishes = model.getDishes();
    var starterID = model.getSelectedDish("starter"); 
    var starterPrintout;
      
    starterPrintout = '<div class="col-sm-12"><div class="col-sm-2"><img src="images/' + model.getDish(starterID).image + '"></div><div class="col-sm-4"><div class = "dishname-header"><h3>' + model.getDish(starterID).name + '</h3></div><p>' + model.getDish(starterID).description + '</p></div><div class="col-sm-5"><div class = "preparation-header"><h3>PREPARATION</h3></div><p>' + model.getDish(starterID).description + '</p></div></div>'
                                                              
    container.empty();
    container.append(starterPrintout);
    
    var maindishID = model.getSelectedDish("main dish"); 
    var maindishPrintout;
      
    maindishPrintout = '<div class="col-sm-12"><div class="col-sm-2"><img src="images/' + model.getDish(maindishID).image + '"></div><div class="col-sm-4"><div class = "dishname-header"><h3>' + model.getDish(maindishID).name + '</h3></div><p>' + model.getDish(maindishID).description + '</p></div><div class="col-sm-5"><div class = "preparation-header"><h3>PREPARATION</h3></div><p>' + model.getDish(maindishID).description + '</p></div></div>'
                                                              
    container.append(maindishPrintout);
    
    var dessertID = model.getSelectedDish("dessert"); 
    var dessertPrintout;
      
    dessertPrintout = '<div class="col-sm-12"><div class="col-sm-2"><img src="images/' + model.getDish(dessertID).image + '"></div><div class="col-sm-4"><div class = "dishname-header"><h3>' + model.getDish(dessertID).name + '</h3></div><p>' + model.getDish(dessertID).description + '</p></div><div class="col-sm-5"><div class = "preparation-header"><h3>PREPARATION</h3></div><p>' + model.getDish(dessertID).description + '</p></div></div>'
                                                              
    container.append(dessertPrintout);
    
     }
    
    this.update();
    model.addObserver(this);
}