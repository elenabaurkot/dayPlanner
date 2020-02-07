$(document).ready(function() {
  // Global variables
  var currentHour = moment().hour();
  var planningHourValue = $(".planningHour");
  var savedEvents = [];

  // call function to show saved planner events from local storage
  init();

  // today's date shown at the top of the page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));


  // on-click function for save button to store what is entered to the planner
  $(".saveBtn").on("click", function() {
    event.preventDefault();
    var plannerText = $("#textarea").value; 
    // Return from function early if submitted todoText is blank
    if (plannerText === "") {
      return;
    }
    //push new event into savedEvents array
      savedEvents.push({plannerEvents:plannerText});
      // store updated events in local storage
      localStorage.setItem("plannerEvents", JSON.stringify(savedEvents));
  });

  
  // get day planner events from local storage
  // parson JSON string to an object
  function init() {
    var getEvents = JSON.parse(localStorage.getItem("plannerEvents"));
    // If events were retrieved from localStorage, update the savedEvents array
    if (getEvents !== null) {
      savedEvents = getEvents;
    }
  }

  // initialize dayplanner with correct colorcoding based on the hour
  for (var i = 0; i < planningHourValue.length; i++) {
    console.log("planningHourValue:", planningHourValue[i]);
    console.log(
      "planningHourValue.getAttribute('data-value')",
      planningHourValue[i].getAttribute("data-value")
    );
    var hourValue = parseInt(planningHourValue[i].getAttribute("data-value"));
    if (currentHour > hourValue) {
      var pastValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour past"
      );
    } else if (currentHour < hourValue) {
      var futureValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour future"
      );
    } else if (currentHour === hourValue) {
      var presentValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour present"
      );
    }
  }
});