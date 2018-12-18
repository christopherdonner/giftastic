var topics=[]
var query="cats"
var rating="g"
var apiKey="PWJVgwxjQJNaf0VkGGCRU10EJah7ZjSP"
var queryURL=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`

console.log("i'm running")
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
