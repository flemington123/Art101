/*
 * Author: Xuqi Wang
 * Created: 4 Feb 2021
 * Licensse: Public Domain
 */


// Define Variables

function sortUserName(){
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

//output
document.writeln("Oh hey, I've fixed yoru name: ", sortUserName(), "</br>");
