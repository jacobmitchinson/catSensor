describe('API', function() {

  describe('when tweet has no profanity', function() {

    it('returns json containing tweet and profanity: false', function() {
      casper.start('http://localhost:9990/api/guacamolay');
      casper.then(function() {
        expect('body').to.have.text('{tweet: Cats cats cats, profanity: false}');
      })
    })
  });

  describe('when tweet has profanity', function() {

    it('returns json containing tweet and profanity: true', function() {
      casper.start('http://localhost:9990/api/Jakobtek');
      casper.then(function() {
        expect('body').to.have.text('{tweet: Currently writing an anti-profanity twitter app. Fuck. Need this as a test., profanity: true}');
      })
    })
  })
})