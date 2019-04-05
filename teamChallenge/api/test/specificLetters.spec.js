const assert = require('chai').assert;
const specificLetters = require('../shell/specificLetters');
const invalidDnaArray = ['HACAAC',
  'AAGAGG',
  'ATTGTT',
  'AAGGA',
  'TCCAAG',
  'TTGTAC'];

const validDnaArray = ['AACAAC',
  'AAGAGG',
  'ATTGTT',
  'AAGGGA',
  'TCCAAG',
  'TTGTAC'];

describe('#Specific Letters', function () {
  it('Debe evaluar sí un array de strings contiene strings de la misma dimensión', function () {
    const hasSameDimentions = specificLetters.hasSameDimentions(validDnaArray)
    assert.equal(hasSameDimentions, true);
  });

  it('Debe evaluar sí un array de strings Es válido (contiene sólo A,C,T,G)', function () {
    const isValidDnaArray = specificLetters.isValidDnaArray(validDnaArray)
    assert.equal(isValidDnaArray, true);
  });

  it('Debe regresar un booleano falso,porque el array no es válido (contiene sólo A,C,T,G)', function () {
    const isValidDnaArray = specificLetters.isValidDnaArray(invalidDnaArray)
    assert.equal(isValidDnaArray, false);
  });

  it('Debe evaluar sí un array de strings Es válido (contiene sólo A,C,T,G)', function () {
    const isValidDnaArray = specificLetters.stringHasAnyOtherLetter(validDnaArray)
    assert.equal(isValidDnaArray, true);
  });
});