var DishesViewController = function (view, controller, generalStateController) {
     
    $(document).on('click', '#allDishesView .dishButton', function(evt) {
        //var dishID = $(this).attr("id");
        var dishID = evt.target.getAttribute("value");
        console.log(dishID);
        controller.setDishID(dishID);

        generalStateController.showDishDetail();
    });

      $("#btn_addtomenu").click(function() {
            //controller.emptyIngredients();
            controller.addDishToMenu(controller.getDishID());
            console.log(controller.getFullMenu());
        });

        $("#searchButton").click(function() {
            view.update(view.searchVal);
            console.log($("#searchInput").val());
            console.log(controller.getFullMenu());
        });
}