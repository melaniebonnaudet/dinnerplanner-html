var SidebarViewController = function(view, model) {
    
   /* var value = view.guestvalue.val();
    
    var listener= function() {
        if (value != "") {
        model.setNumberOfGuests(value);
            }
    }
    
     value.addEventListener("input", listener);*/
    var listener= function() {
        if (document.getElementById("guests").value != "") {
        model.setNumberOfGuests(document.getElementById("guests").value);
            }
    }
    
     document.getElementById("guests").addEventListener("input", listener);

}