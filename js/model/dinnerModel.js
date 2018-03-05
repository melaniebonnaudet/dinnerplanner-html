//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu

    var numberOfGuests = 3;

    var menuDishes = [];
    var menuIngredients = [];
    var dishID = 1;
    
    var observers = [];
    
    this.setDishID = function(id) {
        dishID = id;
        notifyObservers();
        //console.log(dishID);
    }
    
    this.getDishID = function() {
        return dishID;
    }
    
	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
        notifyObservers();
        //console.log(numberOfGuests);
	}
	
	this.getNumberOfGuests = function() {
        return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
        var dish;
        switch (type) {
            case "starter":
                dish = menuDishes[0];
                break;
            case "main dish":
                dish = menuDishes[1];
                break;
            case "dessert":
                dish = menuDishes[2];
                break;    
                }
        return dish;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menuDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
        /*var key;
        var i;
        for(key in dishes) {
			if(dishes[key].id == menuDishes[0] || dishes[key].id == menuDishes[1] || dishes[key].id == menuDishes[2]) {
				for(i in dishes[key].ingredients) {
					menuIngredients.push(dishes[key].ingredients[i]);
				}
			}
		}
		//return menuIngredients[0].name;
        console.log(menuIngredients);
		return menuIngredients;*/
        var i;
        var j;
        var k;
        
        this.emptyIngredients();
        
        for (i in menuDishes) {
            for (j in dishes) {
                if (menuDishes[i] == dishes[j].id) {
                    for (k in dishes[j].ingredients) {
                        menuIngredients.push(dishes[j].ingredients[k]);
                    }
                }
            }
        }
        console.log(menuIngredients); 
        //menuIngredients.push(dishes[0].ingredients[0]);
        return menuIngredients;
	}
    
    this.emptyIngredients = function() {
        while (menuIngredients.length>0) {
            menuIngredients.pop();
        }
    }

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
       /* var i;
        var menuprice = 0;
        for (i in menuIngredients) {
            menuprice += menuIngredients[i].price;
            //console.log(menuIngredients[i].price);
        }
        
        //console.log(menuprice);
        //console.log(this.getNumberOfGuests());
        return menuprice * this.getNumberOfGuests();*/
        
        var _this = this;
        var totalMenuPrice = 0;
        var dishPrice = 0;
        
        var counter = 0;

        console.log("num of dishes "+menuDishes.length);
        for (i in menuDishes) {
 
            this.getDish(menuDishes[i], function(dish){
     
               
                dishPrice += (dish.pricePerServing / dish.servings) * _this.getNumberOfGuests();
                totalMenuPrice += dishPrice;
                //console.log(this.getNumberOfGuests());
                
                console.log(dishPrice);
                //console.log(_this.getNumberOfGuests());
                console.log("before "+ counter);
                counter++;
                console.log("after "+ counter);
                
                /*if (counter == menuDishes.length) {
                    totalMenuPrice = dishPrice;
                }*/
                
                }, function(error) {
                
                });
        }

	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		/*menuDishes.push(id);
        var dish;
        dish = this.getDish(id);
        switch (dish.type) {
            case "starter": 
                menuDishes[0] = id;
                break;
            case "main dish":
                menuDishes[1] = id;
                break;
            case "dessert":
                menuDishes[2] = id;
                break;
        }*/
        menuDishes.push(id);
        notifyObservers();
        /*var i;
        var found = false;
        
        for (i in menuDishes) {
           if (this.getDish(menuDishes[i]).type == this.getDish(id).type) {
               menuDishes.splice(i, 1, id);
               found = true;
           } 
        }
        if (!found) {
        menuDishes.push(id);
            }
        
        this.getAllIngredients();
        notifyObservers();*/
        
       /*if (!menuDishes.some(d => d.id == id.id)) {
			menuDishes.push(id);    
		}
        notifyObservers();*/
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
        if (menuDishes[0] == id) {
            menuDishes[0] = 0;
        }
        
        else if (menuDishes[1] == id) {
            menuDishes[1] = 0;
        }
        
        else if (menuDishes[2] == id) {
            menuDishes[2] = 0;
        }   
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type, filter, callback, errorCallback) {
        var number = "";
        if (type == "all") {
            type = "";
            number = "100";
        }
        
        var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?type=' + type + '&query=' + filter + '&number=' + number;
        
        $.ajax( {
           url: url,
           headers: {
             'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
           },
           success: function(data) {
             //console.log(data);
               callback(data)
           },
           error: function(error) {
             errorCallback(error)
           }
         })
    }
    
	//function that returns a dish of specific ID
	this.getDish = function (id, callback, errorCallback) {
        $.ajax( {
           url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ id +'/information',
           headers: {
             'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
           },
           success: function(data) {
            //console.log(data);
            callback(data)
           },
           error: function(error) {
             errorCallback(error)
           }
         })
	}

    this.getDishes = function() {
        return dishes;
    }
    
    this.addObserver = function(observer) {
        observers.push(observer);
    }
    
    var notifyObservers = function() {
        
        for (var i=0; i<observers.length; i++) {
            //console.log(observers);
             observers[i].update();
        }
    }
    
    

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}
