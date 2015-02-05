var ProfanityChecker = function(dictionary) {
  this.dictionary = dictionary;
}

ProfanityChecker.prototype.isProfanity = function(inputWord) {
  var outcome = false;

  this.dictionary.forEach(function(word){
    if(inputWord == word) {
      outcome = true;
    }
  });
  return outcome;
};

ProfanityChecker.prototype.containsProfanity = function(string) {
  var outcome = false;
  var self = this;

  string.split(" ").forEach(function(word) {
    if(self.isProfanity(word)) {
      outcome = true;
    }
  });

  return outcome;
}

module.exports = ProfanityChecker;