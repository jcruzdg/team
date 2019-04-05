require('./bootstrap.test');
const dna = require('../models/Dna');
const assert = require('chai').assert;

describe('#Dna Model, estos test dependen de los datos guardados en la base de mongo local', function () {
    it('#getDnaWithMutation debe regresar el conteo actual de los adn con mutación.', async function () {
        const dnaCountMutation = await dna.getDnaWithMutation();
        assert.equal(dnaCountMutation, dnaCountMutation);
    });

    it('#getDnaWithoutMutation debe regresar el conteo actual de los adn sin mutación.', async function () {
        const dnaCountMutation = await dna.getDnaWithoutMutation();
        assert.equal(dnaCountMutation, dnaCountMutation);
    });
});
