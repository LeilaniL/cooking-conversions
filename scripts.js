var teaspoons = parseInt(prompt("How many teaspoons do you have?"));
var cups = function(teaspoons){
  return teaspoons / 48;
}
alert("You have " + (cups(teaspoons)).toFixed(2) + " cups.");

var cups = parseInt (prompt ("How many cups do you have?"));
var teaspoons = function (cups) {
  return cups * 48;
}
alert ("You have" + (teaspoons(cups)).toFixed (2) + " teaspoons.");
