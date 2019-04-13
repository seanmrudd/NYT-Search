var subject= "climate"
    var pubDate= "2009-04-13"
    var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + subject + "&fq=" + pubDate + "&api-key=543iW10yeJ2kpLH4K3ZVAQaVp0q25ISm"
  
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response){
      console.log(response)
  })