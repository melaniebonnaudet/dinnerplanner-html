$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
    
	var exampleView = new ExampleView($("#exampleView"), model);
    
    var sidebarView = new SidebarView($("#sidebarView"), model);
    
    var ingredientsView = new IngredientsView($("#ingredientsView"), model);  
    
    var allDishesView = new AllDishesView($("#allDishesView"), model);
    
    var startersView = new StartersView($("#startersView"), model);
    
    var generalStateController = new GeneralStateController();

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */
    
    $("#createNewDinner").click(function(){
          generalStateController.showAllDishesView();
        });

    $("#confirmDinner").click(function(){
         generalStateController.showDinnerOverview();
        });
    
    $("#backToEditDinner").click(function(){
        generalStateController.showAllDishesView();
    });


    $("#printRecipes").click(function(){
        generalStateController.showDinnerPrintout();
    });


    $("#allDishesView").click(function(){
           generalStateController.showDishDetail();
        });

    $("#backToAllDishesView").click(function(){
           generalStateController.showAllDishesView();
        });
});







