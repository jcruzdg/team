const statsService = require('../services/statsService');
require('./bootstrap.test');
const assert = require('chai').assert;

describe('#statsService', function () {
  it('#getMutationsRatio debe regresar un objeto con el ratio', async function () {
    const stats = await statsService.getMutationsRatio();
    assert.equal(stats.countMutations, stats.countMutations);
    assert.equal(stats.countNoMutation, stats.countNoMutation);
    assert.equal(stats.ratio, stats.ratio);
  });
})