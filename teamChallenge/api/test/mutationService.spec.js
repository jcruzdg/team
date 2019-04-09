require('./bootstrap.test');
const assert = require('chai').assert;
const WE_HAVE_PROBLEMS = 'We have some errors';
const oneMutationsArray = ['AACAAC',
  'AAGAGG',
  'ATTGTT',
  'AAGGGA',
  'TCCAAG',
  'TTGTAC'];
const twoMutationsArray = ['AAAAAC',
  'AAAAGG',
  'ATTGTT',
  'AAGGGA',
  'TCCAAG',
  'TTGTAC'];

const obliqueMutation = [
  'AGGACT',
  'TAGTTC',
  'CAAGTT',
  'CAAAGG',
  'ACCAGG',
  'TTGTAC'
];

describe('#Mutation Service', function () {
  it('#hasMutation debería regresar un resultado = 2', async function () {
    const result = await mutationService.hasMutation(oneMutationsArray);
    assert.equal(result, 2);
  });
  it('#hasMutation debe regresar un resultado = 2', async function () {
    const result = await mutationService.hasMutation(twoMutationsArray);
    assert.equal(result, 2);
  });
  it('#hasMutation debe regresar una excepción', async function () {
    try {
      await mutationService.hasMutation(123456);
    } catch (exception) {
      assert.equal(exception.title, WE_HAVE_PROBLEMS);
    }
  });
});
