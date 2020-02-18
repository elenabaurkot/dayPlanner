$(document).ready(function() {
  // Global variables
  var currentHour = moment().hour();
  var planningHourValue = $(".planningHour");
  var savedEvents = {
    9: "",
    10: "",
    11: "", 
    12: "",
    13: "",
    14: "",
    15: "", 
    16: "",
    17: ""
  }

  // call function to show saved planner events from local storage
  init();

  // today's date shown at the top of the page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // On click function for save button
  $(".saveBtn").on("click", function(event) {
    console.log(event.currentTarget.id)
    var index = event.currentTarget.id;
    var plannerText = $("#text-" + index).val();
    //saving events to local storage
    console.log("index: " + index + "value: " + plannerText);
    savedEvents[index] = plannerText;
    console.log(savedEvents);
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
    } else {
      return;
    }
    // push saved events back onto page by appending if the key is equal to the index hour of the array object
    var keys = Object.entries(getEvents)

    keys.forEach(([key, value]) => {
      for (var i = key; i < 18; i++)
      if ($("#text-"+ i).attr('data-time') === key) {
        $('#text-'+ i).append(value);
      }
    })
  }

  // initialize dayplanner with correct colorcoding based on the hour
  for (var i = 0; i < planningHourValue.length; i++) {
    console.log("planningHourValue:", planningHourValue[i]);
    console.log(
      "planningHourValue.getAttribute('data-value')",
      planningHourValue[i].getAttribute("data-value")
    );
    // data-value of the row
    var hourValue = parseInt(planningHourValue[i].getAttribute("data-value"));
    // if the current hour is greater than the row hour, row should be grey
    if (currentHour > hourValue) {
      var pastValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour past"
      );
      // if the current hour is less than the row hour, row should be green
    } else if (currentHour < hourValue) {
      var futureValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour future"
      );
      // if the current hour is equal to the row hour, row should be red
    } else if (currentHour === hourValue) {
      var presentValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour present"
      );
    }
  }
});