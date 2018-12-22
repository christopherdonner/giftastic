var topics=["cat", "dog", "bat", "cow", "rabbit"]
var query=""
var rating="g"
var apiKey="PWJVgwxjQJNaf0VkGGCRU10EJah7ZjSP"
var queryURL="https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"q="+query
var button=$("<button>")
var div=$("<div>")
var p = $("<p>")
//var main=$("#main")
var image=$("<img>") // if image is declared globally, the append fails (???)

//function makeButtons(){}
for(i=0;i<topics.length;i++)
{
  for (var i = 0; i < topics.length; i++) 
  {
   var btn = $("<button>");
    //btn.attr("data-name", topics[i])
    btn.text(topics[i])
    btn.addClass("btn btn-dark");
    btn.attr("id", topics[i])
    $("#buttons").append(btn);
  }
}

$("button").on("click", function() 
{
console.log(this.id)
query=this.id
console.log(queryURL)
$.ajax(
  {
    url: "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q="+query,
    method: "GET"
  }).then(function(response) 
  {
    console.log(response.data[0].images);
    //var image=$("<img>")
    
    image.addClass("pictures");
    image.attr("src", response.data[0].images.fixed_height_still.url);
    image.attr("data-still", response.data[0].images.fixed_height_still.url);
    image.attr("data-animated", response.data[0].images.fixed_height.url);
    image.attr("data-state", "still");
    $("#gifs").append(image);
  });

//var gif=$(".pictures")
image.on("click", function()
{
  var state = $(this).attr("data-state")
  console.log(this)
  console.log($(this).attr("data-state"))
  if(state==="still")
  {
    image.attr("src", $(this).attr("data-animated"))
    image.attr("data-state", "animated")
  }
  else
  {
    image.attr("src", $(this).attr("data-still"))
    image.attr("data-state", "still")
  }
})
})