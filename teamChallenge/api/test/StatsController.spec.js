const supertest = require('supertest');
require('./bootstrap.test');

describe('MutationController', function () {
  describe('#getStats', function () {
    it('debería regresar un status 200', function (done) {
      supertest.agent(sails.hooks.http.app)
        .get('/v1/stats')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (error, result) {
          if (error) {
            done(error);
          } else {
            result.body.should.be.an('object');
            done();
          }
        });
    });
  });
});