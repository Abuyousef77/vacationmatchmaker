//business interface


//user interface
$(document).ready(function(){
  $("#questions").submit(function(event) {
    event.preventDefault();
    var seasons = $("#seasons").val();
    var costs = $("#costs").val();
    var environment = $("#environment").val();
    var history = $("#history").val();
    var crowds = $("#crowds").val();

    $('#mexico').show();
  });
});
