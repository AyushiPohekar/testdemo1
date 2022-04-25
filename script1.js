//4 steps invloved here
//step 01:create a XHR object
//Need:this will create a new object which will have 
//the interaction with servers via api
var request=new XMLHttpRequest();
//step 02:opening a request 
//takes two parameters:"HTTP METHOD","API URL"
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 03:sending a request
request.send();
//step 04:once data successfully loaded from server
//or status code is 200
request.onload=function(){
    //the data coming from the server is of type string
    //so we are converting into the object
    var data=JSON.parse(request.response);
    console.log(data);
   for(var i=0;i<data.length;i++){
       console.log(`Country name:${data[i].name} flag:${data[i].flag}`);
   }
    //i want to print all the country name and their capital in console
//print the countries flag in  the console

}