// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// source 
// https://github.com/comp7589/WorkDayScheduler
$(document).ready(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    var currentDate =  dayjs();
    $("#currentDay").text(currentDate.format("dddd, MMMM D")); // gets the current date
  
    var currentHour = currentDate.format("HH");
    console.log(currentHour + "hrs"); // gets the current hours 
  
    $(".time-display").css("textAlign", "center"); // centers the  header text
  
    var saveButton = $(".saveBtn");
  
    saveButton.on("click", function() {
      var textDescription = $(this).siblings(".description").val();
      console.log (textDescription);
  
      var t = $(this).parent().attr("id");
      console.log(t);
  
      localStorage.setItem(textDescription, t);
    })
  
  
    console.log ($("#hour-9").children());
  
    var time = $(".time-block");
  
    $.each (time, function() {
      var timeSlots =  $(this).attr("id");
      var numTimeSlots = parseInt (timeSlots.split("hour-")[1]);
      console.log(numTimeSlots);
  
      if (numTimeSlots == currentHour){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        
      }
  
      else if (numTimeSlots > currentHour){
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
  
      else if (numTimeSlots < currentHour){
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
        
      }
  
      function savedData() {
        var nine = $("#hour-9, .description");
        nine.val(localStorage.getItem("hour-9"));
  
        var ten = $("#hour-10, .description");
        ten.val(localStorage.getItem("hour-10"));
  
        var eleven = $("#hour-11, .description");
        eleven.val(localStorage.getItem("hour-11"));
  
        var twelve = $("#hour-12, .description");
        twelve.val(localStorage.getItem("hour-12"));
  
        var thirteen = $("#hour-13, .description");
        thirteen.val(localStorage.getItem("hour-13"));
  
        var forteen = $("#hour-14, .description");
        forteen.val(localStorage.getItem("hour-14"));
  
        var fifteen = $("#hour-15, .description");
        fifteen.val(localStorage.getItem("hour-15"));
  
        var sixteen = $("#hour-16, .description");
        sixteen.val(localStorage.getItem("hour-16"));
  
        var seventeen = $("#hour-17, .description");
        seventeen.val(localStorage.getItem("hour-17"));
      }
  
      savedData();
  
    })
  
    // var nine = $("#hour-9").children().eq(0);
    // console.log(nine);
  
    // if (nine === currentHour){
    //   $(this).addClass("present");
    // }
    
    // else if (nine > currentHour){
    //   $(this).addClass("future");
    // }
    
    // else if (nine < currentHour){
    //   $(this).addClass("past");
    // }
  
  
  
  
  
  
  
  
    
    
  });
  