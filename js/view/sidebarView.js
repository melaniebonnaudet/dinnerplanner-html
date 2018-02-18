var SidebarView = function(container, model) { 
    
this.guestinput = container.find("#guests");
     
 //this.guestinput.attr("value", model.getNumberOfGuests());
this.update = function() {  
var starterID;
var starterName;
var starter;
    
var mainDishID;
var mainDishName;
var mainDish;
    
var dessertID;
var dessertName;
var dessert;
    
starterID = model.getSelectedDish("starter"); 
starterName = model.getDish(starterID).name;
    
starter = $("<div class='col-xs-8'></div>").text(starterName);
$("#starterInSidebar").empty();
$("#starterInSidebar").append(starter);
    
mainDishID = model.getSelectedDish("main dish");  
mainDishName = model.getDish(mainDishID).name;
    
mainDish = $("<div class='col-xs-8'></div>").text(mainDishName);
$("#mainDishInSidebar").empty();
    $("#mainDishInSidebar").append(mainDish);
       
dessertID = model.getSelectedDish("dessert");  
dessertName = model.getDish(dessertID).name;
    
dessert = $("<div class='col-xs-8'></div>").text(dessertName);
$("#dessertInSidebar").empty();
$("#dessertInSidebar").append(dessert);

model.getAllIngredients();
this.menuPrice = $("<p class='price'></p>");
$("#total_price").empty();
$("#total_price").append(this.menuPrice);
 
starterPriceElement = $("<div class='col-xs-4'></div>");
maindishPriceElement = $("<div class='col-xs-4'></div>");
dessertPriceElement = $("<div class='col-xs-4'></div>");
$("#starterInSidebar").append(starterPriceElement);   
$("#mainDishInSidebar").append(maindishPriceElement);
$("#dessertInSidebar").append(dessertPriceElement);
    
//this.update = function() {
    this.guestinput.attr("value", guests);
    this.menuPrice.text("SEK " + model.getTotalMenuPrice());  
    
    var guests = model.getNumberOfGuests();
    var i;
    var starterPrice = 0;
    var maindishPrice = 0;
    var dessertPrice = 0;
    
    for (i in model.getDish(starterID).ingredients) {
        starterPrice += model.getDish(starterID).ingredients[i].price*guests;
    }
    
     for (i in model.getDish(mainDishID).ingredients) {
       maindishPrice += model.getDish(mainDishID).ingredients[i].price*guests;
    }
    
      for (i in model.getDish(dessertID).ingredients) {
        dessertPrice += model.getDish(dessertID).ingredients[i].price*guests;
    }
        
    starterPriceElement.text("SEK " + starterPrice)    
    maindishPriceElement.text("SEK " + maindishPrice)
    dessertPriceElement.text("SEK " + dessertPrice)
    
}
    
    this.update();
    model.addObserver(this);
      
}