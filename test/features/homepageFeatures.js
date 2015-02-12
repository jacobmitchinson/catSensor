describe('homepage', function() {

  it('should display a cat if the user enters a handle that contains a tweet with profanity', function() {
    casper.start('http://localhost:9990/');
    casper.waitForSelector('form', function(){

      this.fill('form#enter-twitter-handle', {
        'handle' : 'jakobtek'
      }, true);

    });
    casper.then(function(){
      expect('#tweet').to.include.text('Currently writing an anti-profanity twitter app. Fuck. Need this as a test.');
    });
  });


});