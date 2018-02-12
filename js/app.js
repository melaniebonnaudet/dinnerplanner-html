$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
    
	var exampleView = new ExampleView($("#exampleView"), model);
    
    var sidebarView = new SidebarView($("#sidebarView"), model);
    
    var ingredientsView = new IngredientsView($("#ingredientsView"), model);
    
    var menuHeaderView = new MenuHeaderView($("#menuHeader"), model);
    
    var allDishesView = new AllDishesView($("#allDishesView"), model);
    
    var startersView = new StartersView($("#startersView"), model);
    
    var mainDishView = new MainDishView($("#mainDishView"), model);
    
    var dessertsView = new DessertsView($("#dessertsView"), model);
    
    var dishDetailView = new DishDetailView($("#dishDetailView"), model);
    
    var generalStateController = new GeneralStateController();
    
    var sidebarViewController = new SidebarViewController(sidebarView, model);

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

//var i;
//for (i=0; i<9; i++) {
    $('[name="dish"]').click(function(){
        generalStateController.showDishDetail();
        //console.log("a"+i+"");
        //console.log($("#a"+i+"").text());
        });
    //}

    $("#backToAllDishesView").click(function(){
           generalStateController.showAllDishesView();
        });
});

function myfunction() {
              var x = document.getElementById("typeOfDish").value;
              $("#allDishesView").hide();
              $("#startersView").hide();
              $("#mainDishView").hide();
              $("#dessertsView").hide();
              
              switch (x)  {           
                case "starter": $("#startersView").show();
                      break;
                      
                case "main dish":  $("#mainDishView").show();
                      break;
                      
                case "dessert":  $("#dessertsView").show();
                      break;
                      
                case "all": $("#allDishesView").show();
                      break;
                      
              }
          }






