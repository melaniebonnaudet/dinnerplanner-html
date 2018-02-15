var DishesViewController = function (view, controller) {
     
    var generalStateController = new GeneralStateController();
    
     var listener = function() {
            var dishID = $(this).attr("id");
            console.log(dishID);
            controller.setDishID(dishID);
            generalStateController.showDishDetail();
        }
    
    this.update = function() {
        $(document).on('click', '#allDishesView .dishButton', listener);
    }

    this.update();
    controller.addObserver(this);
}