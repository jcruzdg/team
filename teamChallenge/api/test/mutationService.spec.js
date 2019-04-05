const assert = require('chai').assert;
const oneMutationsArray = ["AACAAC",
  "AAGAGG",
  "ATTGTT",
  "AAGGGA",
  "TCCAAG",
  "TTGTAC"]
const twoMutationsArray = ["AAAAAC",
  "AAAAGG",
  "ATTGTT",
  "AAGGGA",
  "TCCAAG",
  "TTGTAC"]

describe('#Mutation Service', function () {
  it('debería regresar un resultado = 1', async function () {
    const result = await mutationService.hasMutation(oneMutationsArray)
    assert.equal(result, 1);
  });
  it('debe regresar un resultado = 2', async function () {
    const result = await mutationService.hasMutation(twoMutationsArray)
    assert.equal(result, 2);
  });
});