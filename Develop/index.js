$(document).ready(function() {

// Questions: If I set a value for each hour and I try to call the value like this console.log($("#time-9").val); it doesn't work, comes up blank or undefined, works when I try on calculator
// Question: How do I make the text showing what hour on the planner be more responsive to stay inside its column?


// Global variables
var currentHour = (moment().hour());


// today's date shown at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// on-click function for save button
$(".saveBtn").on("click", function() {

});


// function to initialize dayplanner with correct colorcoding based on the hour
// this is where I wanted to use value not class, but couldn't get it to work 
function initializeDayPlanner(){
    if (currentHour > $(".planningHour").val())
    {
        $(".planningHour").addClass("past");
    }
    else if (currentHour < $(".planningHour").val())
    {
        $(".planningHour").addClass("future");
    }
    else if (currentHour === $(".planningHour").val())
    {
        $(".planningHour").addClass("present");
    };
};

// calling the function 
initializeDayPlanner();

});


