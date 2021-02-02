/*
 * Author: Xuqi Wang
 * Created: 2 Feb 2021
 * Licensse: Public Domain
 */


// Define Variables
 myTransport = ["Ford Taurus", "bike", "my feet", "fly"];

 myMainRide = {
    make:  "Ford",
    model: "Taurus",
    color: "Black",
    year:  2004,
    age: function(){
        return 2021 - age;
    }
}

//output
document.writeln("Kind of transporting I use  " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
