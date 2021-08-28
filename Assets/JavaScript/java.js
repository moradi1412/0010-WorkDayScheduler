//getting the data from the storage 
var list = JSON.parse(localStorage.getItem('toDoList')) || []; 

var toDoList = {}; 
//display the current date

//getting the current date and display on the top
var currentDate = moment().format('dddd MMM Do, YYYY HH:MM'); 
$("#currentDay").html(currentDate); 
//.toDate();



console.log(currentDate);
 

$(".saveBtn").click(function (){
    
var toDotask = $("#description").val(); 
toDoList.push(toDotask);  
localStorage.setItem('toToList', JSON.stringify(toDoList)); 
}); 
