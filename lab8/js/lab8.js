/*
 * Author: Xuqi Wang
 * Created: 10 Feb 2021
 * Licensse: Public Domain
 */


// Define Variables
function firstThing(test){
  console.log(test + ": This is the first thing.<br>")
}

function secondThing(test){
  console.log(test + ": This is the second thing.<br>")
}

function thirdThing(test){
  console.log(test + ": This is the third thing.<br>")
}

firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//Test 2
setTimeout(function(){
  firstThing("TEST 2");
}, 0);
setTimeout(function(){
  secondThing("TEST 2");
}, 0);
setTimeout(function(){
  thirdThing("TEST 2");
}, 0);

//Test 3
setTimeout(function(){
  firstThing("TEST 3");
}, 3000);
setTimeout(function(){
  secondThing("TEST 3");
}, 3000);
setTimeout(function(){
  thirdThing("TEST 3");
}, 3000);
