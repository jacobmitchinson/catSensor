var express          = require('express');
var app              = express();
var http             = require('http');
var tweetGrabber     = require('../src/twitterApi');
var ProfanityChecker = require('../src/ProfanityChecker');

var profanityChecker = new ProfanityChecker(['shit', 'Fucking', 'Fuck']);

app.set('view engine', 'ejs');
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/css', express.static(__dirname + '/public/css'));

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/api/:name', function(request, response) {
  var name = request.params.name;

  tweetGrabber(name, 1, function(tweet) {
    response.render('api', { tweet: tweet, profanity: profanityChecker.containsProfanity((tweet[0].text)) });
  });
});

app.listen(9990, function(){
  console.log("Server listening on port 9990");
});

module.exports = app;