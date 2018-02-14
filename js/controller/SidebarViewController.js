var SidebarViewController = function(view, model) {
    
   /*var guestvalue = view.guestinput.val();
    
    console.log(view.guestinput);
    
    var listener= function() {
        //if (guestvalue != "") {
        model.setNumberOfGuests(guestvalue);
            //}
    }
    
     guestvalue.bind("input", listener);*/
    var listener= function() {
        if (document.getElementById("guests").value != "") {
        model.setNumberOfGuests(document.getElementById("guests").value);
            }
    }
    
     document.getElementById("guests").addEventListener("input", listener);

}