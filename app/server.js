var express          = require('express');
var app              = express();
var http             = require('http');
var tweetGrabber     = require('../src/twitterApi');
var ProfanityChecker = require('../src/ProfanityChecker');

var profanityChecker = new ProfanityChecker(['shit', 'Fucking', 'Fuck']);



app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  console.log('hello');
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