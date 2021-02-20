/*
 * Author: Xuqi Wang
 * Created: 20 Feb 2021
 * Licensse: Public Domain
 */


// Define Variables
// challenges
$("button.challenges").click(function(){
  $("#challenges").toggleClass("red");
  $("#challenges").fadeIn("3000");
  $("#problems").fadeOut("3000");
  $("#results").fadeIn("3000");
});
// problems
$("button.problems").click(function(){
  $("#problems").toggleClass("green");
  $("#problems").fadeIn("3000");
  $("#results").fadeOut("3000");
  $("#challenges").fadeIn("3000");
});
// results
$("button.results").click(function(){
  $("#results").toggleClass("blue");
  $("#results").fadeIn("3000");
  $("#challenges").fadeOut("3000");
  $("#problems").fadeIn("3000");
});
//Reset
$("button.reset").click(function(){
  $("#results").show();
  $("#challenges").show();
  $("#problems").show();
});
