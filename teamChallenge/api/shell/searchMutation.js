const MAX_LENGTH = 4;
const MAX_REPEAT = 3;
const TWO_LETTER = 1;
const THREE_LETTER = 2;
const FOUR_LETTER = 3;
const BOTTOM_RIGTH = 'bottomRigth';
const permitedLetters = ['A', 'G', 'C', 'T'];
const fourRepeatedLettersRegex = /(A{4})|(T{4})|(C{4})|(G{4})/gmi;

const tryToFindOblique = async (dnaLetter, dnaArray, indexString, indexLetter, level, direction, count, word) => {
  for (var i = 0; i < MAX_REPEAT; i++) {
    obliqueLetters = getObliqueLetters(dnaArray, indexString, indexLetter, level++);
    if (dnaLetter === obliqueLetters[direction]) {
      word = word + dnaLetter;
    }
    if (word.length === MAX_LENGTH) {
      count++;
    }
  }
  return count;
};

const areFourLettersMatch = (wordToEvaluate) => {
  return wordToEvaluate.match(fourRepeatedLettersRegex);
};

const getObliqueBottomRigth = (dnaArray, x, y) => {
  try {
    const obliqueBottomRigth = dnaArray[x][y] +
      dnaArray[x + TWO_LETTER][y + TWO_LETTER] +
      dnaArray[x + THREE_LETTER][y + THREE_LETTER] +
      dnaArray[x + FOUR_LETTER][y + FOUR_LETTER];
    console.log('obliqueBottomRigth', obliqueBottomRigth);
    return obliqueBottomRigth;
  } catch (exception) {
    console.error('getObliqueBottomRigth', exception);
    return '';
  }
};

const getObliqueLettersTwo = (dnaArray, dnaLetterIndex, dnaRowLettersIndex) => {
  const obliqueResults = {
    bottomRigth: getObliqueBottomRigth(dnaArray, dnaLetterIndex, dnaRowLettersIndex)
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

  obliqueSearchTwo: async (dnaArray, count = 0) => {
    // 1. for para recorrer letras disponibles [A, G, C, T], busca A primero y 
    // así evitar repetir la búsqueda del mismo elemento.
    for (var permitedLetterIndex = 0;
      permitedLetterIndex < permitedLetters.length;
      permitedLetterIndex++) {

      const permitedLetter = permitedLetters[permitedLetterIndex];
      // 2. iterar en el arreglo que contiene todos los strings: ["AGGACT","TAGTTC","CAAGTT","CAAAGG","ACCAGG","TTGTAC"]
      for (var dnaRowLettersIndex = 0; dnaRowLettersIndex < dnaArray.length; dnaRowLettersIndex++) {
        const dnaRowLetters = dnaArray[dnaRowLettersIndex];
        var obliqueResults = {};
        // 3. buscar dentro de ese arreglo la letra que sea igual A, del punto 1.
        for (var dnaLetterIndex = 0; dnaLetterIndex < dnaRowLetters.length; dnaLetterIndex++) {
          const dnaLetter = dnaRowLetters[dnaLetterIndex];

          // 4. Sí el primer elemento de la fila es igual al primer elemento de las
          // letras permitidas, comienza a buscar en diagonal en 4 direcciones.
          if (dnaLetter === permitedLetter) {
            obliqueResults = getObliqueLettersTwo(dnaArray, dnaLetterIndex, dnaRowLettersIndex);
          }
          if (!_.isEmpty(obliqueResults)) {
            // 4. Valida sí alguna de las 4 direcciones contiene 4 letras iguales.
            console.log('Ya casi');
          }
        }
      }
    }
  }
};
