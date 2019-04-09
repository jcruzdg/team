const TWO_LETTER = 1;
const THREE_LETTER = 2;
const FOUR_LETTER = 3;
const fourRepeatedLettersRegex = /(A{4})|(T{4})|(C{4})|(G{4})/gmi;

const areFourLettersMatch = (wordToEvaluate) => {
  return wordToEvaluate.match(fourRepeatedLettersRegex);
};

const obliqueObjectHasMutation = (obliqueObject, count) => {
  Object.keys(obliqueObject).forEach((direction) => {
    if (areFourLettersMatch(obliqueObject[direction])) {
      count++;
    }
  });
  return count;
};

const getObliqueUpRigth = (dnaArray, x, y) => {
  try {
    const obliqueUpRigth = dnaArray[x][y] +
      dnaArray[x - TWO_LETTER][y + TWO_LETTER] +
      dnaArray[x - THREE_LETTER][y + THREE_LETTER] +
      dnaArray[x - FOUR_LETTER][y + FOUR_LETTER];
    return obliqueUpRigth;
  } catch (exception) {
    console.log(exception.message);
    return '';
  }
};

const getObliqueUpLeft = (dnaArray, x, y) => {
  try {
    const obliqueUpLeft = dnaArray[x][y] +
      dnaArray[x - TWO_LETTER][y - TWO_LETTER] +
      dnaArray[x - THREE_LETTER][y - THREE_LETTER] +
      dnaArray[x - FOUR_LETTER][y - FOUR_LETTER];
    return obliqueUpLeft;
  } catch (exception) {
    console.log(exception.message);
    return '';
  }
};

const getObliqueBottomLeft = (dnaArray, x, y) => {
  try {
    const obliqueBottomLeft = dnaArray[x][y] +
      dnaArray[x + TWO_LETTER][y - TWO_LETTER] +
      dnaArray[x + THREE_LETTER][y - THREE_LETTER] +
      dnaArray[x + FOUR_LETTER][y - FOUR_LETTER];
    return obliqueBottomLeft;
  } catch (exception) {
    console.log(exception.message);
    return '';
  }
};

const getObliqueBottomRigth = (dnaArray, x, y) => {
  try {
    const obliqueBottomRigth = dnaArray[x][y] +
      dnaArray[x + TWO_LETTER][y + TWO_LETTER] +
      dnaArray[x + THREE_LETTER][y + THREE_LETTER] +
      dnaArray[x + FOUR_LETTER][y + FOUR_LETTER];
    return obliqueBottomRigth;
  } catch (exception) {
    console.log(exception.message);
    return '';
  }
};

const getObliqueLettersTwo = (dnaArray, dnaLetterIndex, dnaRowLettersIndex) => {
  const obliqueResults = {
    bottomRigth: getObliqueBottomRigth(dnaArray, dnaLetterIndex, dnaRowLettersIndex),
    bottomLeft: getObliqueBottomLeft(dnaArray, dnaLetterIndex, dnaRowLettersIndex),
    upRigth: getObliqueUpRigth(dnaArray, dnaLetterIndex, dnaRowLettersIndex),
    upLeft: getObliqueUpLeft(dnaArray, dnaLetterIndex, dnaRowLettersIndex),
  };
  return obliqueResults;
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
    for (var dnaRowLettersIndex = 0; dnaRowLettersIndex <
      dnaArray.length; dnaRowLettersIndex++) {
      const dnaRowLetters = dnaArray[dnaRowLettersIndex];
      var obliqueResults = {};
      for (var dnaLetterIndex = 0; dnaLetterIndex <
        dnaRowLetters.length; dnaLetterIndex++) {

        obliqueResults = getObliqueLettersTwo(dnaArray, dnaLetterIndex, dnaRowLettersIndex);

        if (!_.isEmpty(obliqueResults)) {
          count = obliqueObjectHasMutation(obliqueResults, count);
          if (count > 1) {
            return count;
          }
        }
      }
    }
    return count;
  }
};
