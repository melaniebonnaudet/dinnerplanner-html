var SidebarView = function(container, model) { 
    
this.guestvalue = container.find("#guests");
     
 //this.guestvalue.attr("value", model.getNumberOfGuests());
    
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
$("#starterInSidebar").append(starter);
    
mainDishID = model.getSelectedDish("main dish");  
mainDishName = model.getDish(mainDishID).name;
    
mainDish = $("<div class='col-xs-8'></div>").text(mainDishName);
$("#mainDishInSidebar").append(mainDish);
       
dessertID = model.getSelectedDish("dessert");  
dessertName = model.getDish(dessertID).name;
    
dessert = $("<div class='col-xs-8'></div>").text(dessertName);
$("#dessertInSidebar").append(dessert);

model.getAllIngredients();
this.menuPrice = $("<p class='price'></p>");
$("#total_price").append(this.menuPrice);
    
 
/*var guests = model.getNumberOfGuests();
var i;

var starterPrice = 0;
var maindishPrice = 0;
var dessertPrice = 0;
    
    for (i in model.getDish(starterID).ingredients) {
        price = $("<div class='col-xs-4'></div>").text("SEK " + ((starterPrice +=                        model.getDish(starterID).ingredients[i].price)*guests));
    }
     $("#starterInSidebar").append(price);
    
     for (i in model.getDish(mainDishID).ingredients) {
        price = $("<div class='col-xs-4'></div>").text("SEK " + ((maindishPrice += model.getDish(mainDishID).ingredients[i].price)*guests));
    }
     $("#mainDishInSidebar").append(price);
    
     for (i in model.getDish(dessertID).ingredients) {
        price = $("<div class='col-xs-4'></div>").text("SEK " + ((dessertPrice += model.getDish(dessertID).ingredients[i].price)*guests));
    }
     $("#dessertInSidebar").append(price);*/
    

    
 
    starterPriceElement = $("<div class='col-xs-4'></div>");
    maindishPriceElement = $("<div class='col-xs-4'></div>");
    dessertPriceElement = $("<div class='col-xs-4'></div>");
    $("#starterInSidebar").append(starterPriceElement);   
    $("#mainDishInSidebar").append(maindishPriceElement);
    $("#dessertInSidebar").append(dessertPriceElement);
    
this.update = function() {
    this.guestvalue.attr("value", guests);
    this.menuPrice.text("SEK " + model.getTotalMenuPrice());
    
    
    var guests = model.getNumberOfGuests();
    var i;
    var starterPrice = 0;
    var maindishPrice = 0;
    var dessertPrice = 0;
    
    for (i in model.getDish(starterID).ingredients) {
        starterPrice += model.getDish(starterID).ingredients[i].price*guests;
        //maindishPrice += model.getDish(mainDishID).ingredients[i].prsice*guests;
        //dessertPrice += model.getDish(dessertID).ingredients[i].price*guests;
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