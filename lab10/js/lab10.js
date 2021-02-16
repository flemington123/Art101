/*
 * Author: Xuqi Wang
 * Created: 16 Feb 2021
 * Licensse: Public Domain
 */


// Define Variables
function shuffleArray(array) {
        var currentIndex = array.length, temValue, randomIndex;

        while(0!==currentIndex){
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temValue;
        }
        return array;
}

function toTitleCase(str) {
   return str.toString().replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}

function sortUserName(userName){
  return userName.toLowerCase().split("").sort().join("");
}

function randomizeName(userName){
  var nameArray = userName.toLowerCase().split("");
  console.log("nameArray =", nameArray);

  var shuffledArray = shuffleArray(nameArray);
  console.log("shuffleArray =", shuffledArray);
  var shuffledString = shuffledArray;
  console.log("shuffledString =", shuffledString);
  var newName = toTitleCase(shuffledString);

  return newName;
}
var submitButton = document.getElementById('submit-button');
submitButton.addEventListener("click", function(){
  console.log('Submitted');
  var userName = document.getElementById('name-field').value;
  var sortedName = sortUserName(userName);
  var randomName = randomizeName(userName);
  var outputArea = document.getElementById('output');
  outputArea.innerText = randomName;

})
