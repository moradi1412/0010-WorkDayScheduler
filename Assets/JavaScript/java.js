//getting the data from the storage 
var list = JSON.parse(localStorage.getItem('todolist')) || []; 

//display the current date

var currentDate = moment().format('dddd MMM Do, YYYY'); 
//.toDate();


console.log(currentDate);
$("#currentDay").html(currentDate);  