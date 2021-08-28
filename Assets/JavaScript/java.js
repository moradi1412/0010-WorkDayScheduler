//getting the data from the storage 
var list = JSON.parse(localStorage.getItem('toDoList')) || []; 

var toDoList = {}; 
//display the current date

//getting the current date and display on the top
var currentDate = moment().format('dddd MMM Do, YYYY HH:MM'); 
$("#currentDay").html(currentDate); 
console.log(currentDate);

//getting only the hours for the color-coded 
var rightNow = new Date ().getHours(); 
console.log(rightNow); 

//If condition to color-code the rows base on the rightNow hour
function timeFrame(){
    if (rightNow > 9) {
        $("#task9").addClass("past"); 
    } else if (rightNow >= 9 && rightNow < 10 ){
        $("#task9").addClass("present"); 
    } else {
        $("#task9").addClass("future"); 
    }

    if (rightNow > 10) {
        $("#task10").addClass("past"); 
    } else if (rightNow >= 10 && rightNow < 11 ){
        $("#task10").addClass("present"); 
    } else {
        $("#task10").addClass("future"); 
    }

    if (rightNow > 11) {
        $("#task11").addClass("past"); 
    } else if (rightNow >= 11 && rightNow < 12 ){
        $("#task11").addClass("present"); 
    } else {
        $("#task11").addClass("future"); 
    }

    if (rightNow > 12) {
        $("#task12").addClass("past"); 
    } else if (rightNow >= 12 && rightNow < 13 ){
        $("#task12").addClass("present"); 
    } else {
        $("#task12").addClass("future"); 
    }

    if (rightNow > 13) {
        $("#task13").addClass("past"); 
    } else if (rightNow >= 13 && rightNow < 14 ){
        $("#task13").addClass("present"); 
    } else {
        $("#task13").addClass("future"); 
    }

    if (rightNow > 14) {
        $("#task14").addClass("past"); 
    } else if (rightNow >= 14 && rightNow < 15 ){
        $("#task14").addClass("present"); 
    } else {
        $("#task14").addClass("future"); 
    }

    if (rightNow > 15) {
        $("#task15").addClass("past"); 
    } else if (rightNow >= 15 && rightNow < 16 ){
        $("#task15").addClass("present"); 
    } else {
        $("#task15").addClass("future"); 
    }

    if (rightNow > 16) {
        $("#task16").addClass("past"); 
    } else if (rightNow >= 16 && rightNow < 17 ){
        $("#task16").addClass("present"); 
    } else {
        $("#task16").addClass("future"); 
    }

    if (rightNow > 17) {
        $("#task17").addClass("past"); 
    } else if (rightNow >= 17 && rightNow < 18 ){
        $("#task17").addClass("present"); 
    } else {
        $("#task17").addClass("future"); 
    }
}; 


timeFrame();




 
