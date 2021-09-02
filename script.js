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


let appointments = document.querySelector("textarea")
let data = JSON.parse(localStorage.getItem("day-schedule")) || {};
let hours = 24;

// when page loads
// grab all time-block elements

$(".time-block").each(function () {
    console.log(this);
    const id = $(this).attr("id");
    // looking for da{ta in local storage for each text area
    if(data[id]){
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


for (let hour = 9; hour <= 17; hour++) {
    


    function timeColors() {
    if(hour < formattedTime){
        ".time-block".css("background-color", "pink")
}else{
    hour > formattedTime
}".time-block".css("background-color", "green")
}};