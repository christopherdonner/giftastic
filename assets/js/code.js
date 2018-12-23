var topics = [
  "alligator",
  "bear",
  "cat",
  "dog",
  "elephant",
  "fox",
  "giraffe",
  "hippopotamus",
  "iguana",
  "jaguar",
  "koala",
  "lion",
  "monkey",
  "naked mole rat"]
var query = ""
var rating = "g"
var apiKey = "PWJVgwxjQJNaf0VkGGCRU10EJah7ZjSP"
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "q=" + query
//var button = $("<button>")
var div = $("<div>")
var p = $("<p>")

//var main=$("#main")
//var image=$("<img>") // if image is declared globally, the append fails (???)

//function makeButtons(){}
function drawButtons() {
  $("#buttons").empty();
  for (i = 0; i < topics.length; i++) {
    for (var i = 0; i < topics.length; i++) {
      var btn = $("<button>");
      //btn.attr("data-name", topics[i])
      btn.text(topics[i])
      btn.addClass("btn btn-dark");
      btn.addClass("myButtons")
      btn.attr("id", topics[i])
      $("#buttons").append(btn);
    }
  }
}
console.log(topics)
drawButtons();

// reset button
$("#reset").on("click", function () 
{
  $("#gifs").empty();
});

//onclick event listener for the buttons
$(".myButtons").on("click", function () {
  console.log("button push")
  query = this.id
  $.ajax(
    {
      url: "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + query,
      method: "GET"
    }).then(function (response) {
      var rando = Math.floor(Math.random() * 10)
      var pic = $("<img>")

      pic.addClass("pictures");
      pic.attr("src", response.data[rando].images.fixed_height_still.url);
      pic.attr("data-still", response.data[rando].images.fixed_height_still.url);
      pic.attr("data-animated", response.data[rando].images.fixed_height.url);
      pic.attr("data-state", "still");
      $("#gifs").append(pic);
    });

  //var gif=$(".pictures")
  //var image = $(".pictures")
  $(".pictures").on("click", function () {
    console.log("image click")
    var state = $(this).attr("data-state")
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animatedl"))
      $(this).attr("data-state", "animated")
    }
    else if(state === "animated") {
      $(this).attr("src", $(this).attr("data-still"))
      $(this).attr("data-state", "still")
    }
  })
})

// add new buttons from addButton form upon submitButton click
$("#submitButton").on("click", function () {
  event.preventDefault();
  topics.push($("#addButton").val().trim())
  $("#addButton").val("")
  console.log(topics)
  drawButtons();
  //topics.push()
})
