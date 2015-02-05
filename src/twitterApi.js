module.exports = function tweetGrabber(screen_name, count, callback) {
  var Twit = require('twit');

  var T = new Twit({
    consumer_key: 'LD3GZnqebDRhei2ia0Gi05LaT',
    consumer_secret: 'w5KLP5QVDBlTLeChfePAQBmoQMJ3Tb1kKwUhP4RcqPjAWZ4eVk',
    access_token: '1432674492-1ej37xEfekbyZyfrVvBwqVFQkdY1No42PqJ8nny',
    access_token_secret: 'HOOefGTX35BCsGm4uGviKVmn8YWqrtsA9yDIUF9n3F5O7'
  });

  var options = { screen_name: screen_name, count: count };

  T.get('statuses/user_timeline', options, function(err, data, response) {
    callback(data);
  })
};

