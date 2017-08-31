//business interface
var iceland = 0;
var india = 0;
var mexico = 0;
var singapore = 0;
var egypt = 0;
var yourResults = [];

function nextCost() {
  $("#seasonsShow").hide();
  $("#costsShow").fadeIn(2000);
}

function nextCity() {
  $("#costsShow").hide();
  $("#cityShow").fadeIn(2000);
}

function nextHistory() {
  $("#cityShow").hide();
  $("#historyShow").fadeIn(2000);
}

function nextCrowds() {
  $("#historyShow").hide();
  $("#crowdsShow").fadeIn(2000);
}

function nextName() {
  $("#crowdsShow").hide();
  $("#nameShow").fadeIn(2000);
  $("#findvacation").fadeIn(2000);
}

function Country (season, cost, environment, history, crowd) {
  this.season = season;
  this.cost = cost;
  this.environment = environment;
  this.crowd = crowd;
  this.history = history;
}

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

  yourResults.push(iceland, india, egypt, mexico, singapore);
};

//user interface
$(document).ready(function(){
  $("#questions").submit(function(event) {
    event.preventDefault();
    var userSeason = $("input[name=season]:checked").val();
    var userCost = $("input[name=money]:checked").val();
    var userEnv = $("input[name=city]:checked").val();
    var userHist = $("input[name=modern]:checked").val();
    var userCrowds = $("input[name=crowds]:checked").val();
    var firstname = $("#first-name").val();

    var myCountry = new Country (userSeason, userCost, userEnv, userHist, userCrowds, firstname);

    myCountry.vacationmatch();
    var highScore = Math.max.apply(null, yourResults);

    if (highScore === iceland) {
      $("#questions").hide();
      $('#icelandDiv').show();
      $(".personal").text(firstname);
    }
    if (highScore === singapore) {
      $("#questions").hide();
      $('#singaporeDiv').show();
      $(".personal").text(firstname);
    }
    if (highScore === india) {
      $("#questions").hide();
      $('#indiaDiv').show();
      $(".personal").text(firstname);
    }
    if (highScore === egypt) {
      $("#questions").hide();
      $('#egyptDiv').show();
      $(".personal").text(firstname);
    }
    if (highScore === mexico) {
      $("#questions").hide();
      $('#mexicoDiv').show();
      $(".personal").text(firstname);
    }
    $(".backButton").click(function() {
      location.reload("#questions");
    });
  });
});
