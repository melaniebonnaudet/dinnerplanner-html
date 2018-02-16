var IngredientsView = function(container, model) { 
    
this.numGuestContainer = container.find("#numberOfGuests");

   
    //var ingredient;
    //var allDishes = model.getDishes();
    var i;
    
    var guests = model.getNumberOfGuests();
    var dish = model.getDish(model.getDishID());
    
    //console.log(dish);
 
    $("#btn_addtomenu").click(function(){
      console.log(dish.ingredients[2].quantity);
        });   
    
    /*var amount = [];
    var amountElement = $("<p></p>");
    
    $("#amount").append(amount);
    
    for (i in allDishes[0].ingredients) { 
        amount.push((allDishes[0].ingredients[i].quantity * guests) + ' ' + allDishes[0].ingredients[i].unit);
        //$("#amount").append(amount);
    }
    amountElement.text(amount);*/
    

    for (i in dish.ingredients) { 
        //amount = $("<p></p>").text(dish.ingredients[i].quantity * guests + ' ' + dish.ingredients[i].unit);
        amount = $("<p></p>").text(dish.ingredients[i].quantity);
        $("#amount").append(amount);
    }
    
    for (i in dish.ingredients) {
        ingredient = $("<p></p>").text(dish.ingredients[i].name);
        $("#ingredients").append(ingredient);
    }
    
     for (i in dish.ingredients) {
        price = $("<p></p>").text('SEK ' + dish.ingredients[i].price * guests);
        $("#price").append(price);
    }
    
    this.update = function() {
        this.numGuestContainer.html(model.getNumberOfGuests());
        var dish = model.getDish(model.getDishID());
        console.log(dish);
    }
    
    this.update();
    model.addObserver(this);
    
   /* $("#btn_addtomenu").click(function(){
        
     for (i in allDishes[0].ingredients) {
        price = 0;
      console.log(price += allDishes[0].ingredients[i].price);
          }
        }); */
        
}