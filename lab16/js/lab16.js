/*
 * Author: Xuqi Wang
 * Created: 6 Mar 2021
 * Licensse: Public Domain
 */


 var apiEndpoint = "https://xkcd.now.sh/?comic=latest"

 $("#activate").click(API);

 function putText(text){
   $("#output").html(text);
 }
 function API(){
   $.ajax({
       // The URL for the request (from the api docs)
       url: apiEndpoint,
       // The data to send (will be converted to a query string)
       data: {

             },
       // Whether this is a POST or GET request
       type: "GET",
       // The type of data we expect back
       dataType : "json",

       // success
       success: function(data){
         var textData = JSON.stringify(data);
         var str = "";
         var imageURL = data.img;
         var title = data.title;

         str += "<h1>" + title + "</h1>";
         str += "<img src ='" + imageURL + "'>"
         console.log("This is data:", textData)
         putText(str);
       },

       // error
       error: function(xhr, status, errorThrown){
         console.log("Failed.");
         putText(errorThrown + " Status:" + status);
       }
   })
 }
