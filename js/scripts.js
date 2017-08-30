//business interface
var iceland = 0;
var india = 0;
var mexico = 0;
var singapore = 0;
var egypt = 0;
var yourResults = [];
var icelandText;

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
  icelandText = "<a href='file:///Users/Guest/Desktop/vacationmatchmaker/iceland.html'>We suggest you visit Iceland!</a>";
  var indiaText = "<a href='file:///Users/Guest/Desktop/vacationmatchmaker/india.html'>We suggest you visit India!</a>";
  var mexicoText = "<a href='file:///Users/Guest/Desktop/vacationmatchmaker/mexico.html'>We suggest you visit Mexico!</a>";
  var singaporeText = "<a href='file:///Users/Guest/Desktop/vacationmatchmaker/singapore.html'>We suggest you visit Singapore!</a>";
  var egyptText = "<a href='file:///Users/Guest/Desktop/vacationmatchmaker/egypt.html'>We suggest you visit Egypt!</a>";
  var allCountries = [];

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
    iceland += 2;
    singapore += 2;
  } else if (this.cost === "budget") {
    india += 2;
    egypt += 2;
  } else if (this.cost === "average") {
    mexico += 1;
  }

  if (this.environment === "nature") {
    iceland += 3;
  } else if (this.environment === "mix") {
    india += 2;
    mexico += 1;
  } else if (this.environment === "city") {
    egypt += 3;
    singapore += 3;
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
    iceland += 5;
  } else if (this.crowd === "indifferent") {
    mexico += 1;
    egypt += 1;
  } else if (this.crowd === "like-them") {
    india += 5;
    singapore += 5;
  }
  console.log("Iceland is" + iceland);
  console.log("India is" + india);
  console.log("Egypt is" + egypt);
  console.log("Mexico is" + mexico);
  console.log("Singapore is" + singapore);

  allCountries.push(iceland, india, egypt, mexico, singapore);
  console.log(allCountries);
  var highScore = Math.max.apply(null, allCountries);
  console.log("high score is" + highScore);


  if (highScore === iceland) {
    yourResults.push(icelandText);
  }
  if (highScore === singapore) {
    yourResults.push(singaporeText);
  }
  if (highScore === india) {
    yourResults.push(indiaText);
  }
  if (highScore === mexico) {
    yourResults.push(mexicoText);
  }
  if (highScore === egypt) {
    yourResults.push(egyptText);
  }
  console.log("your results are" + yourResults);
};

//user interface
$(document).ready(function(){
  var zebra = $("#questions").submit(function(event) {
    event.preventDefault();
    var userSeason = $("input[name=season]:checked").val();
    var userCost = $("input[name=money]:checked").val();
    var userEnv = $("input[name=city]:checked").val();
    var userHist = $("input[name=modern]:checked").val();
    var userCrowds = $("input[name=crowds]:checked").val();
    var firstname = $("#first-name").val();

    var myCountry = new Country (userSeason, userCost, userEnv, userHist, userCrowds);


    myCountry.vacationmatch();
    for (var i=0; i < yourResults.length; i++) {
      $("#vacationresults").append("<p>" + firstname + " " + yourResults[i] + "</p>");
    };
  });
  $(".backButton").click(function(){
  history.back(".backButton");
  zebra.submit();
  });
});
