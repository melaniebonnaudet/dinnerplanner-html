var GeneralStateController = function() {

    $("#allDishes").hide();
    $("#dinnerOverview").hide();
    $("#menuHeader").hide();
    $("#dinnerPrintout").hide();
    $("#sidebar").hide();
    $("#dishDetail").hide();
    $(".loader").hide();
    
    this.showAllDishesView = function() {
        $("#allDishes").show();
        $("#sidebar").show();
        $("#home").hide();
        $("#startersView").hide();
        $("#mainDishView").hide();
        $("#dessertsView").hide();
        $("#dinnerOverview").hide();
        $("#menuHeader").hide();
        $("#dinnerPrintout").hide();
        $("#dishDetail").hide();
    }
    
    this.showDinnerOverview = function() {
        $("#dinnerOverview").show();
        $("#menuHeader").show();
        $("#allDishes").hide();
        $("#sidebar").hide();
        $("#dishDetail").hide();
    }

    this.showDinnerPrintout = function() {
        $("#dinnerOverview").hide();
        $("#dinnerPrintout").show();
        $("#menuHeader").show();
    }
    
    this.showDishDetail = function() {
        $("#allDishes").hide();
        $("#dishDetail").show();
    }
}