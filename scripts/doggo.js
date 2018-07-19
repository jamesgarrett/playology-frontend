// var myDoggos = [
// 	{id: 0, name: "Lucy", weight: "8 Lbs", age: "1 Year", chew: "Moderate Chewer", toy: "Dri-Tech Rope", url: "/img/panel-7.png"},
// 	{id: 1, name: "Lionel", weight: "86 Lbs", age: "6 Year", chew: "Aggressive Chewer", toy: "Dri-Tech Rope", url: "/img/panel-7.png"}
// 	{id: 2, name: "Fido", weight: "34 Lbs", age: "3 Year", chew: "Moderate Chewer", toy: "Dri-Tech Rope", url: "/img/panel-7.png"},
// 	{id: 3, name: "Rex", weight: "4 Lbs", age: "12 Year", chew: "Light Chewer", toy: "Dri-Tech Rope", url: "/img/panel-7.png"}
// ];

var doggos = [{name: "Lucy", weight: "8 lbs"},{name: "Lionel", weight: "8 lbs"},{name: "Fido", weight: "8 lbs"},{name: "Rex", weight: "8 lbs"}];

var string = '';

$.each( doggo, function( index, value ){
    string += value;
});

console.log(string);

$(document).ready(function(){ 
    setTimeout(function(){ 
        $('#name').fadeOut();}, 2000); 
});