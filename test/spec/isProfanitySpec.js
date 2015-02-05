var ProfanityChecker = require('../../src/isProfanity');

describe('isProfanity', function() {

  var profanityChecker;

  beforeEach(function() {
    profanityChecker = new ProfanityChecker();
  });

  it('checks if single word is profane', function() {
    expect(profanityChecker.isProfanity('shit')).toBe(true);
  });

  it('checks if multiple words are profane', function() {
    expect(profanityChecker.isProfanity('shit fuck')).toBe(true);
  });

});