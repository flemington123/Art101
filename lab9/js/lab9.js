/*
 * Author: Xuqi Wang
 * Created: 13 Feb 2021
 * Licensse: Public Domain
 */


// Define Variables
var outputEl = document.getElementById("output");
outputEl.style.color = "red";
var resultsEl = document.getElementById("results");
var new1El = document.createElement("p");
new1El.innerHTML = "This is newElement1";
new1El.style.fontSize = "30px";

var new2El = document.createElement("h1");
new2El.innerHTML = "This is newElement2";
new2El.style.fontSize = "30px";

var buttonEl = document.createElement("button");
buttonEl.id = "Mybutton";
buttonEl.innerHTML = "YES";
buttonEl.style.marginLeft = "50px";
buttonEl.style.fontSize = "50px";
resultsEl.appendChild(buttonEl);

document.body.appendChild(new1El);
outputEl.appendChild(new2El);
