//business interface


//user interface
$(document).ready(function(){
  $("#options").submit(function(event) {
    event.preventDefault();
    var pettype = $("#selectid").val();
    alert(pettype);
  });
});
