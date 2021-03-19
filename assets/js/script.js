// variable to store the searched city
var city = "";

// other variables i need
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty = $("#humidity");
var currentWSpeed = $("#wind-speed");
var currentUvindex = $("#uv-index");
var sCity = [];
var APIKey = "a0aca8a89948154a4182dcecc780b513";

// function that searches the city to see if it exists in the entries
function find(city) {
  for (var i = 0; i < sCity.length; i++) {
    if (city.toUpperCase() === sCity[i]) {
      return -1;
    }
  }
  return 1;
}

