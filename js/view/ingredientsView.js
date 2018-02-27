var IngredientsView = function(container, model) { 

var _this = this;
    
this.numGuestContainer = container.find("#numberOfGuests");
this.ingredientsViewTotPrice = container.find("#ingredientsViewTotPrice");
this.amount = container.find("#amount");
this.ingredients = container.find("#ingredients");
this.price = container.find("#price");
    
var dishPriceElement = $("<span class='price'></span>");
this.ingredientsViewTotPrice.append(dishPriceElement);
    
    this.update = function() {
        
        var guests = model.getNumberOfGuests();
        this.numGuestContainer.html(guests);
        
        model.getDish(model.getDishID(), function(dish){

            var i;
            var quantity;
            var ingrendient;
           
            _this.amount.empty();
            _this.ingredients.empty();

            
            for (i in dish.extendedIngredients) { 
                quantity = $("<p></p>").text(dish.extendedIngredients[i].amount * guests + ' ' + dish.extendedIngredients[i].unit);
                
                _this.amount.append(quantity);
                
                ingredient = $("<p></p>").text(dish.extendedIngredients[i].name);
                
                _this.ingredients.append(ingredient);
            }
            
            var dishPrice = (dish.pricePerServing / dish.servings) * guests;
            dishPrice = dishPrice.toFixed(2);
            dishPriceElement.text("SEK " + dishPrice);
            
        }, function(error) {
         /* do something with the error */
        });
        
       
      
    }
    
    this.update();
    model.addObserver(this);
        
}