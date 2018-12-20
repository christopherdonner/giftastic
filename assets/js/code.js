var topics=["cat", "dog", "bat", "cow"]
var query=""
var rating="g"
var apiKey="PWJVgwxjQJNaf0VkGGCRU10EJah7ZjSP"
var queryURL=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`
var button=$("<button>")
var div=$("<div>")
var p = $("<p>")

for(i=0;i<topics.length;i++)
{
  console.log(topics[i])
  div.appendTo($("#main")).attr("id", i)
  button.text(topics[i]).addClass("btn btn-primary").attr("id", i).appendTo(div)
  //btn.appendTo(p).appendTo($("#main"))
}


console.log(queryURL)
$.ajax(
  {
    url: queryURL,
    method: "GET"
  }).then(function(response) 
  {
    console.log(response);
  });

