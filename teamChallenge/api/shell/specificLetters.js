const specificLetters = ['A', 'T', 'C', 'G'];

module.exports = {
  hasSameDimentions: (arrayDna) => {
    return arrayDna[0].length === arrayDna.length;
  },

  stringHasAnyOtherLetter: function (dnaString) {
    var hasOtherLetter = false;
    for (var i = 0; i < dnaString.length; i++) {
      if (!(specificLetters.indexOf(dnaString[i]) > -1)) {
        hasOtherLetter = true;
      }
    }
    return hasOtherLetter;
  },

  isValidDnaArray: function (arrayDna) {
    var isAValidDnaArray = true;
    arrayDna.forEach(dnaString => {
      if (this.stringHasAnyOtherLetter(dnaString)) {
        isAValidDnaArray = false;
      }
    });
    return isAValidDnaArray;
  }
};
