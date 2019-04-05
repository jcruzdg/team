const statsService = require('../services/statsService');
require('./bootstrap.test');
const assert = require('chai').assert;
const statsResult = {
  "countMutations": 5,
  "countNoMutation": 10,
  "ratio": 0.5
}
describe('#statsService', function () {
  it('#getMutationsRatio debe regresar un objeto con el ratio', async function () {
    const stats = await statsService.getMutationsRatio();
    assert.equal(stats.ratio, statsResult.ratio);
  });
})