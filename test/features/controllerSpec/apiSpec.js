describe('API', function() {

  it('returns a json with the tweet', function() {
    casper.start('http://localhost:9990/api/guacamolay');
    casper.then(function() {
      expect('body').to.have.text('{tweet: Cats cats cats}');
    })
  });
});