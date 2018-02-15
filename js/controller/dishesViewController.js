var DishesViewController = function (view, controller) {
     
    $('.dishButton').click(function(evt) {
        generalStateController.showDishDetail();
        var dishID = evt.target.getAttribute("value");
        console.log(dishID);
        
        });
}