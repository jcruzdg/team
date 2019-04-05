const supertest = require('supertest');

describe('MutationController', function () {

  describe('#hasMutation', function () {
    it('debería regresar un status 403 forbidden'), function (done) {

      supertest(sails.hooks.http.app)
        .post('/v1/mutation')
        .set('Content-Type', 'application/json')
        .set('Acccept', 'application/json')
        .send({
          "dna": ["AAACAA",
            "AGTTGG",
            "ATTGTT",
            "AAGGGA",
            "CCCAAG",
            "TTGTAC"]
        })
        .expect(200)
        .end(done);
    }
  });
});
