describe('API', function() {

  it('returns a json with the tweet', function() {
    casper.start('http://localhost:9999/api/guacamolay');
    casper.then(function() {
      expect('body').to.have.text('{text: \'Cat cat cat\'}');
    })
  });
});