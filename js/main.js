/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var date = new Date();
console.log(date);
var dayOfWeek = date.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

days.forEach((day,index)=>{
    if(index == new Date().getDay()){
        console.log("Today is "+day);
        dayOfWeek = day;}
    }
)
var hours = date.getHours();
var minutes = date.getMinutes();
var newhour = hours >= 12 ? 'PM' : 'AM';
// Find current hour in AM-PM Format
hours = hours % 12;
// To display "0" as "12"
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
var current_time = hours + ':' + minutes + ' ' + newhour;
var datetoday = `Today is ${dayOfWeek}. <br />Current Time: ${current_time}`;

document.getElementById("answer1").innerHTML = datetoday;

//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------
*/
var datenow = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const year = date.getFullYear();
const day = date.getDate();
let month = date.getMonth();

var date1 = `${month}-${day}-${year}<br />${month}/${day}/${year}<br />${day}/${month}/${year}`;
document.getElementById("answer2").innerHTML = date1;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------
*/

function myFunction() {
var print = document.documentElement.innerHTML;
document.getElementById('answer3').innerText= print;
}



//adapt from https://stackoverflow.com/questions/817218/how-to-get-the-entire-document-html-as-a-string#answer-35917295



/* 4.--------
*/
//

$(document).ready(function() {
'use strict';
console.log('main.js loaded');

paper.install(window);
paper.setup(document.getElementById('main-canvas'));
var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';

var tool = new Tool();
tool.onMouseDown = function(event) {
var c = Shape.Circle(event.point.x, event.point.y, 20);
c.fillColor = 'green';
};
paper.view.draw();
});



// adapt from Learning Javascript Ethan Brown Chapter 1
