var SidebarViewController = function(view, model) {
    
    var listener= function() {
        if (view.guestinput.val() != "") {
        model.setNumberOfGuests(view.guestinput.val());
            }
    }
    
     view.guestinput.on("input", listener);
    
    /*var listener= function() {
        if (document.getElementById("guests").value != "") {
        model.setNumberOfGuests(document.getElementById("guests").value);
            }
    }
    
     document.getElementById("guests").addEventListener("input", listener);*/
    
    

}