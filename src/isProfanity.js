var ProfanityChecker = function() {

  this.dictionary = ['shit'];

}

ProfanityChecker.prototype.isProfanity = function (inputWord) {
  var outcome = false;

  this.dictionary.forEach(function(word){
    console.log(word);
    if(inputWord == word) {
      outcome = true;
    }
  });

  return outcome;
};

module.exports = ProfanityChecker;