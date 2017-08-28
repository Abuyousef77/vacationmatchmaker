//business interface
function Country (name, season, cost, environment, history, crowd){
  this.name = name;
  this.season = season;
  this.cost = cost;
  this.environment = environment;
  this.crowd = crowd;
  this.history = history;
}

var countries = [
  new Country ("Iceland", "Summer", "Splurge", "Nature", "Modern", "Hate-them"),
  new Country ("India", "Winter", "Budget", "mix", "Historic", "Like-them"),
  new Country ("Mexico", "Fall", "Average", "mix", "Historic", "Indifferent"),
  new Country ("Singapore", "Spring", "Splurge", "City", "Modern", "Like-them"),
  new Country ("Egypt", "Winter", "Budget", "City", "Historic", "Indifferent"),
];

Country.prototype.match = function () {

};

//user interface
$(document).ready(function(){
  $("#questions").submit(function(event) {
    event.preventDefault();
    var seasons = $("#seasons").val();
    var costs = $("#costs").val();
    var environment = $("#environment").val();
    var history = $("#history").val();
    var crowds = $("#crowds").val();

  });
});
