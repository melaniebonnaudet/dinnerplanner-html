var DishesViewController = function (view, controller) {
    
     view.specificDish.click(function(evt){
        model.generalStateController.showDishDetail();
        console.log(evt.target.getAttribute("value"));
        });
}