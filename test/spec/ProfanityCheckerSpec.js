var ProfanityChecker = require('../../src/ProfanityChecker');

describe('isProfanity', function() {

  var profanityChecker;

  beforeEach(function() {
    profanityChecker = new ProfanityChecker(['shit', 'Fucking']);
  });

  it('checks if single word is profane', function() {
    expect(profanityChecker.isProfanity('shit')).toBe(true);
  });

  it('checks if multiple words are profane', function() {
    expect(profanityChecker.containsProfanity("Fucking thing sucks. We'll do it live! We'll do it live!")).toBe(true);
  });

});