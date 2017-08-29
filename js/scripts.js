//business interface
var iceland = 0;
var india = 0;
var mexico = 0;
var singapore = 0;
var egypt = 0;

//objects
function Country (season, cost, environment, history, crowd){
  this.season = season;
  this.cost = cost;
  this.environment = environment;
  this.crowd = crowd;
  this.history = history;
}

var countries = [
  new Country ("summer", "splurge", "nature", "modern", "hate-them"), //iceland
  new Country ("winter", "budget", "mix", "historic", "like-them"), //india
  new Country ("fall", "average", "mix", "historic", "indifferent"), //mexico
  new Country ("spring", "splurge", "city", "modern", "like-them"), //singapore
  new Country ("winter", "budget", "city", "historic", "indifferent"), //egypt
];

Country.prototype.vacationmatch = function () {
  if (this.season === "summer") {
    iceland += 1;
  } else if (this.season === "winter") {
    india += 1;
    egypt += 1;
  } else if (this.season === "fall") {
    mexico += 1;
  } else if (this.season === "spring") {
    singapore += 1;
  }

  if (this.cost === "splurge") {
    iceland += 1;
    singapore += 1;
  } else if (this.season === "budget") {
    india += 1;
    egypt += 1;
  } else if (this.season === "average") {
    mexico += 1;
  }

  if (this.environment === "nature") {
    iceland += 1;
  } else if (this.environment === "mix") {
    india += 1;
    mexico += 1;
  } else if (this.environment === "city") {
    egypt += 1;
    singapore += 1;
  }

  if (this.history === "modern") {
    iceland += 1;
    singapore += 1;
  } else if (this.history === "historic") {
    india += 1;
    mexico += 1;
    egypt += 1;
  }

  if (this.crowd === "hate-them"){
    iceland += 1;
  } else if (this.crowd === "indifferent") {
    mexico += 1;
    egypt += 1;
  } else if (this.crowd === "like-them") {
    india += 1;
  }
  alert("Iceland is" + iceland);
  alert("India is" + india);
  alert("Egypt is" + egypt);
  alert("Mexico is" + mexico);
  alert("Singapore is" + singapore);
};

//user interface
$(document).ready(function(){
  $("#questions").submit(function(event) {
    event.preventDefault();
    var userSeason = $("#seasons").val();
    var userCost = $("#costs").val();
    var userEnv = $("#environment").val();
    var userHist = $("#history").val();
    var userCrowds = $("#crowds").val();

    var myCountry = new Country (userSeason, userCost, userEnv, userHist, userCrowds);

    myCountry.vacationmatch();
  });
});
