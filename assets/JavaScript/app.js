var subject= "climate"
var limit= 10
var beginDate= 20090413
var endDate= 20090413
var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + subject + "&fq=" + pubDate + "&begin_date="+beginDate +"&end_date="+endDate+""+limit + "&api-key=543iW10yeJ2kpLH4K3ZVAQaVp0q25ISm"
  
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response){
      console.log(response)
  })