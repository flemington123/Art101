/*
 * Author: Xuqi Wang
 * Created: 24 Feb 2021
 * Licensse: Public Domain
 */


maxFactors = 4;
outputEl = document.getElementById("output");
// Define Variables
function FizzBuzz(maxNums, factorObj) {
  for (var num = 0; num<maxNums; num++){
      var outputStr = "";
      for (var factor in factorObj){
        if (num % factor == 0){
          outputStr += factorObj[factor];
        }
      }
      if (outputStr){
        outputStr = " - " + outputStr + "!";
      }
      outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

// more factores
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        numId = "num" + factor;
        textId = "text" + factor;
        numValue = document.getElementById(numId).value;
        textValue = document.getElementById(textId).value;
        console.log(factor + ") num:", numValue, "text:", textValue)
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    newEl = document.createElement("p");
    newEl.innerHTML = str;
    // append the results to next
    outputEl.appendChild(newEl);
}

// add button click function
document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("Where you want to stop");
        return;
    }
    // get factors
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("At least one factor and text");
        return;
    }
    // make output clean
    outputEl.innerHTML = "";
    FizzBuzz(max, factorObj);
    outputEl.classList.add("cols");
})
