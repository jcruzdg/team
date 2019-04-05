const definedLetters = ['A', 'G', 'C', 'T'];
const fourRepeatedLettersRegex = /(A{4})|(T{4})|(C{4})|(G{4})/gmi;
const areFourLettersMatch = (wordToEvaluate) => {
  return wordToEvaluate.match(fourRepeatedLettersRegex);
};

const isInRange = (dnaArray, x, y) => {
  try {
    return dnaArray[x][y];
  } catch (exception) {
    return '';
  }
};

const getObliqueLetters = (dnaArray, indexString, indexLetter, level) => {
  return {
    upLeft: isInRange(dnaArray, indexString - level, indexLetter - level), //Arriba izquierda
    upRigth: isInRange(dnaArray, indexString - level, indexLetter + level), //Arriba derecha
    bottomLeft: isInRange(dnaArray, indexString + level, indexLetter - level), //Abajo izquierda
    bottomRigth: isInRange(dnaArray, indexString + level, indexLetter + level) //Abajo izquierda
  }
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

    // TODO: SE debe iniciar la busqueda de letra por letra, para no repetir la búsqueda.
    // 1. foreach de las letras disponibles [A, G, C, T], buscar A
    // 2. iterar en el arreglo que contiene todos los strings: ["AGGACT","TAGTTC","CAAGTT","CAAAGG","ACCAGG","TTGTAC"]
    // 3. buscar dentro de ese arreglo la letra que sea igual A, del punto 1.
    // 4. Aplicar el algoritmo para buscar en diagonal. ( arribaDerecha, arribaIzquierda, abajoIzquierda,  abajoDerecha) por 4 veces.
    
    dnaArray.forEach(function (dnaString, indexString) { // [A,B,C,D,E]
      for (var indexLetter = 0; indexLetter < dnaString.length; indexLetter++) { // A
        const dnaLetter = dnaString[indexLetter];
        console.log('----------');
        console.log('dnaString', dnaString);
        console.log('continue', dnaLetter);
        var level = 1;
        var obliqueLetters = getObliqueLetters(dnaArray, indexString, indexLetter, level);
        try {

          /*if (dnaLetter === obliqueLetters.upLeft) {
            console.log('Sí, continúa.');
            console.log('Toma index del elemento y continua preguntando hacia arriba izquierda el línea recta');
          } else if (dnaLetter === obliqueLetters.upRigth) {
            console.log('Toma index del elemento y continua preguntando hacia arriba derecha el línea recta');
          } else if (dnaLetter === obliqueLetters.bottomLeft) {
            console.log('Toma index del elemento y continua preguntando hacia abajo izquierda el línea recta');
          } else if (dnaLetter === obliqueLetters.bottomRigth) {
            console.log('Toma index del elemento y continua preguntando hacia abajo derecha el línea recta');*/
          for (var i = 0; i < 3; i++) {
            obliqueLetters = getObliqueLetters(dnaArray, indexString, indexLetter, level++);
            if (dnaLetter === obliqueLetters.bottomRigth) {
              console.log('continue...', obliqueLetters.bottomRigth);
            }
          }
          //}
        } catch (exception) {

        }
      }
      count++;
      if (count > 1) {
        return count;
      }
    });

    return count;
  }
};
