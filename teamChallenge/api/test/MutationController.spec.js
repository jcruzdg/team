const supertest = require('supertest');
require('./bootstrap.test');

describe('#MutationController', function () {

  describe('#hasMutation', function () {
    it('debería regresar un status 200', function (done) {

      supertest.agent(sails.hooks.http.app)
        .post('/v1/mutation')
        .set('Content-Type', 'application/json')
        .set('Acccept', 'application/json')
        .send({
          'dna': ['AAAAAT',
            'AGTTGG',
            'ATTGTT',
            'AAGGGA',
            'CCCAAG',
            'TTGTAC']
        })
        .expect(200)
        .end(function (error, result) {
          if (error) {
            done(error);
          } else {
            result.body.should.be.an('object');
            done();
          }
        });
    });

    it('debería regresar un status 403 ya que contiene una letra fuera de las permitidas.', function (done) {
      supertest.agent(sails.hooks.http.app)
        .post('/v1/mutation')
        .set('Content-Type', 'application/json')
        .set('Acccept', 'application/json')
        .send({
          'dna': ['BAAAAT',
            'AGTTGG',
            'ATTGTT',
            'AAGGGA',
            'CCCAAG',
            'TTGTAC']
        })
        .expect(403)
        .end(function (error, result) {
          if (error) {
            done(error);
          } else {
            done();
          }
        });
    });

    it('debería regresar un status 403 ya que contiene sólo una mutación.', function (done) {
      supertest.agent(sails.hooks.http.app)
        .post('/v1/mutation')
        .set('Content-Type', 'application/json')
        .set('Acccept', 'application/json')
        .send({
          'dna': ['AAAAAT',
            'AGTTGG',
            'ATTGTT',
            'GAGGGA',
            'CCCAAG',
            'TTGTAC']
        })
        .expect(403)
        .end(function (error, result) {
          if (error) {
            done(error);
          } else {
            done();
          }
        });
    });

  });
});
