var teaspoons = parseInt(prompt("How many teaspoons do you have?"));
var cups = function(teaspoons){
  return teaspoons / 48;
}
alert("You have " + (cups(teaspoons)).toFixed(2) + " cups.");

var cups = parseInt (prompt ("How many cups do you have?"));
var teaspoons = function (cups) {
  return cups * 48;
}
alert ("You have " + (teaspoons(cups)).toFixed (2) + " teaspoons.");

var teaspoons2 = parseInt(prompt("How many teaspoons do you have?"));
var tablespoons = function (teaspons2) {
  return teaspoons2/3
}
alert ("You have " + (tablespoons(teaspoons2)).toFixed (2) + " tablespoons.");

var tablespoons = parseInt(prompt("How many tablespoons do you have?"));
var teaspoons2 = function (tablespoons) {
  return tablespoons*3
}
alert ("You have " + (teaspoons2(tablespoons)).toFixed (2) + " teaspoons.");

var howManyGallons = parseInt(prompt("How many gallons do you have?"));
var cupsFromGallons = function(howManyGallons){
  return howManyGallons*16;
}
alert("That's " + (cupsFromGallons(howManyGallons)) + " cups!");
$(document) . ready (function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
  });
});
