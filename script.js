// Live Time
setInterval(function () {
  //Date -> Class -> Function Constructor
  const date = new Date();
  // get month
  const month = date.getMonth() + 1;
  // get the day (date)
  const day = date.getDate();
  // get year
  const year = date.getFullYear();
  // hour
  const hour = date.getHours();
  // minute
  const minutes = date.getMinutes();
  // seconds
  const seconds = date.getSeconds();

  const formattedTime = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;
  $("#time").text(formattedTime);
}, 1000);

let appointments = document.querySelector("textarea");
let data = JSON.parse(localStorage.getItem("day-schedule")) || {};

// when page loads
// grab all time-block elements

const date = new Date();

$(".time-block").each(function (Date) {
  const id = $(this).attr("id");
  const displayedHour = parseInt(id.split("-").pop());
  date.getHours();

  // console.log(this);
  // console.log(hour);

  if (displayedHour === date.getHours()) {
    //  current hour -> styled grey
    //  select only
    $(this).find("textarea").addClass("bg-secondary text-white");
  } else if (displayedHour < date.getHours()) {
    //  past hour -> styled red
    $(this).find("textarea").addClass("bg-warning text-white");
  } else {
    //  future -> styled green
    $(this).find("textarea").addClass("bg-success text-white");
  }
  // looking for data in local storage for each text area
  if (data[id]) {
    //input that text
    console.log(data[id]);
  }
  // select class for if the time block is current, in the past, or future
});

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // grab value from the text area
  const val = $(this).siblings("textarea").eq(0).val().trim();
  // grab id from the parent
  const id = $(this).parent().attr("id");
  // add it to our data object
  data[id] = val;
  //  save to localstorage
  localStorage.setItem("day-schedule", JSON.stringify(data));
});
