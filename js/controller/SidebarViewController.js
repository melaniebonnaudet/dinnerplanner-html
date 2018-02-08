var SidebarViewController = function(view, model) {

    var listener= function() {
        if (document.getElementById("guests").value != "") {
        model.setNumberOfGuests(document.getElementById("guests").value);
            }
    }
    
     document.getElementById("guests").addEventListener("input", listener);

}