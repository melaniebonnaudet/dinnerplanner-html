var IngredientsView = function(container, model) { 
    
container.find("#numberOfGuests").html(model.getNumberOfGuests());
    
    //var amount;
    //var ingredient;
    var allDishes = model.getDishes();
    var i;
    var guests;
    
    guests = model.getNumberOfGuests();
 
    //$("#btn_addtomenu").click(function(){
      // console.log(allDishes[0].ingredients[0].quantity);
        //});   

    for (i in allDishes[0].ingredients) { 
        amount = $("<p></p>").text(allDishes[0].ingredients[i].quantity * guests + ' ' + allDishes[0].ingredients[i].unit);
        $("#amount").append(amount);
    }
    
    for (i in allDishes[0].ingredients) {
        ingredient = $("<p></p>").text(allDishes[0].ingredients[i].name);
        $("#ingredients").append(ingredient);
    }
    
     for (i in allDishes[0].ingredients) {
        price = $("<p></p>").text('SEK ' + allDishes[0].ingredients[i].price * guests);
        $("#price").append(price);
    }
    
    
   /* $("#btn_addtomenu").click(function(){
        
     for (i in allDishes[0].ingredients) {
        price = 0;
      console.log(price += allDishes[0].ingredients[i].price);
          }
        }); */
        
}