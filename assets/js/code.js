var topics=["cat", "dog", "bat", "cow"]
var query=""
var rating="g"
var apiKey="PWJVgwxjQJNaf0VkGGCRU10EJah7ZjSP"
var queryURL="https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"q="+query
var button=$("<button>")
var div=$("<div>")
var p = $("<p>")
var main=$("#main")

for(i=0;i<topics.length;i++)
{
  for (var i = 0; i < topics.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array.
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var btn = $("<button>");
    // Adding a class
    //btn.addClass("movie");
    // Adding a data-attribute with a value of the movie at index i
    btn.attr("data-name", topics[i]);
    // Providing the button's text with a value of the movie at index i
    btn.text(topics[i]);
    btn.addClass("btn btn-dark")
    btn.attr("id", topics[i])
    // Adding the button to the HTML
    $("#main").append(btn);
  }
}

$("button").on("click", function() {
console.log(this.id)
query=this.id
console.log(queryURL)
$.ajax(
  {
    url: "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q="+query,
    method: "GET"
  }).then(function(response) 
  {
    console.log(response.data);
  });


})