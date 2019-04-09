const supertest = require('supertest');
require('./bootstrap.test');

describe('#MutationController', () => {

  describe('#hasMutation', () => {
    it('debería regresar un status 200', (done) => {

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
        .end((error, result) => {
          if (error) {
            return done(error);
          } else {
            result.body.should.be.an('object');
            return done();
          }
        });
    });

    it('debería regresar un status 403 ya que contiene una letra fuera de las permitidas.', (done) => {
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
        .end((error) => {
          if (error) {
            return done(error);
          } else {
            return done();
          }
        });
    });

    it('debería regresar un status 403 ya que contiene sólo una mutación.', (done) => {
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
        .end((error) => {
          if (error) {
            return done(error);
          } else {
            return done();
          }
        });
    });
  });
});
