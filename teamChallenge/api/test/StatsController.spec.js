const supertest = require('supertest');
require('./bootstrap.test');

describe('MutationController', () => {
  describe('#getStats', () => {
    it('debería regresar un status 200', (done) => {
      supertest.agent(sails.hooks.http.app)
        .get('/v1/stats')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((error, result) => {
          if (error) {
            return done(error);
          } else {
            result.body.should.be.an('object');
            return done();
          }
        });
    });
  });
});
