const isNotAnArray = 'somethingElse';
const assert = require('chai').assert;
const validateDnaArray = require('../shell/validateDnaArray');
const dnaArray = ["AACAAC",
    "AAGAGG",
    "ATTGTT",
    "AAGGGA",
    "TCCAAG",
    "TTGTAC"];

describe('#validateDnaArray', function () {
    it('#validateDnaArray Debe regresar un booleano false, debido a que se trata de un string', function () {
        const isaDnaArray = validateDnaArray(isNotAnArray);
        assert.equal(isaDnaArray, false);
    });

    it('#validateDnaArray Debe regresar un booleano false, debido a que se trata de un string', function () {
        const isaDnaArray = validateDnaArray(isNotAnArray);
        assert.equal(isaDnaArray, false);
    });

    it('#validateDnaArray Debe regresar un booleano true, debido a que se trata de un array de ADN válido.', function () {
        const isaDnaArray = validateDnaArray(dnaArray);
        assert.equal(isaDnaArray, true);
    });
});