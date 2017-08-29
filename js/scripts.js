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
  var icelandText = "You're going to Iceland!";
  var indiaText = "You're going to India!";
  var mexicoText = "You're going to Mexico";
  var singaporeText = "You're going to Singapore!";
  var egyptText = "You're going to Egypt!";
  var allCountries = [];

  if (this.season === "summer") {
    iceland += 1;
    // return icelandText;
  } else if (this.season === "winter") {
    india += 1;
    // return indiaText;
    egypt += 1;
    // return egyptText;
  } else if (this.season === "fall") {
    mexico += 1;
    // return mexicoText;
  } else if (this.season === "spring") {
    singapore += 1;
    // return singaporeText;
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
    singapore += 1;
  }
  console.log("Iceland is" + iceland);
  console.log("India is" + india);
  console.log("Egypt is" + egypt);
  console.log("Mexico is" + mexico);
  console.log("Singapore is" + singapore);

  allCountries.push(iceland, india, egypt, mexico, singapore);
  // var splitCountries = allCountries.split(',');
  console.log(allCountries);
  var highScore = Math.max.apply(null, allCountries);
  console.log("high score is" + highScore);

  if (highScore === iceland) {
    return icelandText;
  } else if (highScore === singapore) {
    return singaporeText;
  } else if (highScore === india) {
    return indiaText;
  } else if (highScore === mexico) {
    return mexicoText;
  } else if (highScore === egypt) {
    return egyptText;
  }
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

    // myCountry.vacationmatch();
    $("#userOutput").text(myCountry.vacationmatch());
  });
});
