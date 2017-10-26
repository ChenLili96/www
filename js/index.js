var key = "pen";
var value = "blue";
window.localStorage.setItem( key, value );

//var key ="box";
//var value = "red";
window.localStorage.setItem("box", "red" );

var pen = window.localStorage.getItem("pen");
var box = window.localStorage.getItem("box");

$(document).ready(function(){
    
   $("#pen").text("my pen color is " + pen);
   $("#box").text("my box color is " + box);
   $("#person").text("dfewwew" + box);
})

var chocolate = {
    "name" : "Mars",
    "energy" : "1883",
    "fat" :"17",
    "saturates" : "8.1",
    "carbothdrate" : "69",
    "sugar" : "60",
    "protein" : "4.4",
    "salt" : "0.42"
}
console.log(chocolate.name + " is " + chocolate.energy);

var objString = JSON.stringify(chocolate);
window.localStorage.setItem("nutrition",objString);



var person= {
		"firstName": "Homer",
  		"lastName": "Simpson",
 		"address": {
    			"streetAddress": "742 Evergreen Terrace",
    			"city": "Springfield",
    			"state": "?"
		}
	}
console.log(
	person.firstName + 
	"is from" + 
	person.address.city);
var personString = JSON.stringify(person);

window.localStorage.setItem("address",personString);

var getPerson = window.localStorage.getItem(“address”);
var personJSON = JSON.parse(getPerson);

