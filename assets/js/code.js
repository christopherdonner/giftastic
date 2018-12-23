var topics = ["cat", "dog", "bat", "cow", "rabbit"]
var query = ""
var rating = "g"
var apiKey = "PWJVgwxjQJNaf0VkGGCRU10EJah7ZjSP"
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "q=" + query
var button = $("<button>")
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
      btn.attr("id", topics[i])
      $("#buttons").append(btn);
    }
  }
}

drawButtons();

//onclick event listener for the buttons
$("button").on("click", function () {
  console.log(this.id)
  query = this.id
  console.log(queryURL)
  $.ajax(
    {
      url: "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + query,
      method: "GET"
    }).then(function (response) {
      var rando=Math.floor(Math.random()*10)
      console.log(response.data[rando].images);
      var pic = $("<img>")

      pic.attr("src", response.data[rando].images.fixed_height_still.url);
      pic.attr("data-still", response.data[rando].images.fixed_height_still.url);
      pic.attr("data-animated", response.data[rando].images.fixed_height.url);
      pic.attr("data-state", "still");
      pic.addClass("pictures");
      $("#gifs").append(pic);
    });

    //var gif=$(".pictures")
    //var image = $(".pictures")
  $(".pictures").on("click", function () {
    var state = $(this).attr("data-state")
    console.log(this)
    console.log($(this).attr("data-state"))
    if ($(this).attr("data-state") === "still") {
      $(this).attr("src", $(this).attr("data-animated"))
      $(this).attr("data-state", "animated")
    }
    else {
      $(this).attr("src", $(this).attr("data-still"))
      $(this).attr("data-state", "still")
    }
  })
})

// add new buttons from addButton form upon submitButton click
$("#submitButton").on("click", function () {
  event.preventDefault();
  console.log($("#addButton").val())
  topics.push($("#addButton").val())
  $("#addButton").val("")
  drawButtons();
  //topics.push()
})