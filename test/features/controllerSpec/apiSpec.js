describe('API', function() {

  it('displays a tweet that doesnt have any swearing in it', function() {
    casper.start('http://localhost:9999/api/guacamolay');
    casper.then(function() {
      expect('body').to.have.text('Cats cats cats');
    })
  });
});