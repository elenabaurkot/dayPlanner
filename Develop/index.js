$(document).ready(function() {
  // Questions: If I set a value for each hour and I try to call the value like this console.log($("#time-9").val); it doesn't work, comes up blank or undefined, works when I try on calculator
  // Question: How do I make the text showing what hour on the planner be more responsive to stay inside its column?

  // Global variables
  var currentHour = moment().hour();
  console.log(currentHour);
  console.log(typeof currentHour);
  var planningHourValue = $(".planningHour");
  console.log(planningHourValue);

  // today's date shown at the top of the page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // on-click function for save button
  $(".saveBtn").on("click", function() {});

  // function to initialize dayplanner with correct colorcoding based on the hour
  // this is where I wanted to use value not class, but couldn't get it to work

  console.log("planningHourValue.length", planningHourValue.length);
  for (var i = 0; i < planningHourValue.length; i++) {
    console.log("planningHourValue:", planningHourValue[i]);
    console.log(
      "planningHourValue.getAttribute('data-value')",
      planningHourValue[i].getAttribute("data-value")
    );
    var hourValue = parseInt(planningHourValue[i].getAttribute("data-value"));
    if (currentHour > hourValue) {
      //   $(".planningHour").addClass("past");
      var pastValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour past"
      );
    } else if (currentHour < hourValue) {
      //   $(".planningHour").addClass("future");
      var futureValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour future"
      );
    } else if (currentHour === hourValue) {
      //   $(".planningHour").addClass("present");
      var presentValue = planningHourValue[i].setAttribute(
        "class",
        "col-10 planningHour present"
      );
    }
  }
});

