var SidebarView = function(container, model) { 

 this.guestvalue = container.find("#guests");
     
 this.guestvalue.attr("value", model.getNumberOfGuests());
    
var starterID;
var starterName;
var starter;
    
starterID = model.getSelectedDish("starter");
    
starterName = model.getDish(starterID).name;
    
starter = $("<div class='col-xs-8'></div>").text(starterName);
$("#starterInSidebar").append(starter);
    
var mainDishID;
var mainDishName;
var mainDish;
    
mainDishID = model.getSelectedDish("main dish");
    
mainDishName = model.getDish(mainDishID).name;
    
mainDish = $("<div class='col-xs-8'></div>").text(mainDishName);
$("#mainDishInSidebar").append(mainDish);
    
    
var dessertID;
var dessertName;
var dessert;
    
dessertID = model.getSelectedDish("dessert");
    
dessertName = model.getDish(dessertID).name;
    
dessert = $("<div class='col-xs-8'></div>").text(dessertName);
$("#dessertInSidebar").append(dessert);

console.log(model.getTotalMenuPrice());
console.log(model.getNumberOfGuests());
menuPrice = $("<p class='price'></p>").text("SEK " + model.getTotalMenuPrice());
$("#total_price").append(menuPrice);
    
    
    
    
/*this.update = function() {
        this.numGuestContainer.html(model.getNumberOfGuests());
        
    }
    
    this.update();
    model.addObserver(this);*/
}