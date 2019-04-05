const specificLetters = ['A', 'T', 'C', 'G'];
const fourRepeatedLettersRegex = /(A{4})|(T{4})|(C{4})|(G{4})/gmi;
const areFourLettersMatch = (wordToEvaluate) => {
  return wordToEvaluate.match(fourRepeatedLettersRegex);
};

module.exports = {

  horizontalSearch: async (dnaArray, counter = 0) => {
    for (var i = 0; i < dnaArray.length; i++) {
      if (areFourLettersMatch(dnaArray[i])) {
        counter++;
      }
      if (counter > 1) {
        return counter;
      }
    }
    return counter;
  },

  verticalSearch: async (dnaArray, counter = 0) => {
    for (var j = 0; j < dnaArray[0].length; j++) {
      var word = '';
      for (var i = 0; i < dnaArray.length; i++) {
        word = word + dnaArray[i][j];
        if ((i + 1) === dnaArray[0].length) {
          if (areFourLettersMatch(word)) {
            counter++;
          }
          if (counter > 1) {
            return counter;
          }
        }
      }
    }
    return counter;
  },

  obliqueSearch: async (dnaArray, count = 0) => {

    // Buscará letterToFind en el elemento 0 de dnaArray
    // recorre las letras de los elementos del dnaArray [A,A,G,C,T]
    for (var i = 0; i < dnaArray.length; dnaArray++) {
      let modifyIndex = i;
      let dnaElement = dnaArray[i];
      let letter = dnaElement[i];
      let repeteadLetter = 0;
      let downRigthLetter = dnaArray[modifyIndex++][modifyIndex++];

      if (letter === downRigthLetter) {
        repeteadLetter++;
      }
      if (repeteadLetter === 4) {
        count++;
      }
    }

    return count;
  }
};
