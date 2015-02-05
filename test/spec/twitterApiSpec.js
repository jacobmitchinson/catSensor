var tweetGrabber = require('../../src/twitterApi');

describe('TweetGrabber', function() {

  var tweet;

  it('retrieves the last tweet of a given user', function(done) {
    tweet = tweetGrabber('guacamolay', 1, function(tweet) {
      expect(tweet[0].text).toEqual('Cats cats cats');  
      done();
    });
  });
});