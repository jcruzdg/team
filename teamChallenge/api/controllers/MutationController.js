/**
 * MutationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const isValidDnaArray = require('../shell/validateDnaArray');

module.exports = {
    hasMutation: async function (req, res) {
        var dnaArray = req.param('dna');

        if (!isValidDnaArray(dnaArray)) {
            return res.status(403).send('Forbidden');
        }

        return res.status(200).send({ message: 'All is ok' });
    }
};

