var DishesViewController = function (view, controller, generalStateController) {
     
    //var generalStateController = new GeneralStateController();
    
    //this.update = function() {
        $(document).on('click', '#allDishesView .dishButton', function(evt) {
            //var dishID = $(this).attr("id");
            var dishID = evt.target.getAttribute("value");
            console.log(dishID);
            controller.setDishID(dishID);
            generalStateController.showDishDetail();
        });
    //}

    //this.update();
    //controller.addObserver(this);
}