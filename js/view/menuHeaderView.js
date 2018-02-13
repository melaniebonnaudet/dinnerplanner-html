var MenuHeaderView = function(container, model) { 

    //var me = this;
    
    //container.find("#numberOfGuests").html(me.update(model.getNumberOfGuests()));
    
    this.numGuestContainer = container.find("#numberOfGuests");
    
    this.update = function() {
        this.numGuestContainer.html(model.getNumberOfGuests());      
    }
    
    this.update();
    model.addObserver(this);
}