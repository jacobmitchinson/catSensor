var express = require('express');
var app = express();
var http = require('http');
var tweetGrabber = require('../src/twitterApi');

app.use(express.static(__dirname + '/default.htm'));

app.get('/', function(request, response) {
  console.log('hello');
});

app.get('/api/:name', function(request, response) {
  console.log(request.query.name);
  tweet = tweetGrabber(request.query.name, 1, function(tweet) {
    response.render('api', {tweet: tweet});
  });
});

app.listen(9990, function(){
  console.log("Server listening on port 9990");
});

module.exports = app;