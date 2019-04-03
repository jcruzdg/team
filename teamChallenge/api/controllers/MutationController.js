/**
 * MutationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var isValidDnaArray = require('../shell/validateDnaArray');

var getForbiddenResponse = (res) => {
  return res.status(403).send('Forbidden');
};

module.exports = {

  getForbiddenResponse: getForbiddenResponse,

  hasMutation: async (req, res) => {
    var dnaArray = req.param('dna');

    if (!isValidDnaArray(dnaArray)) {
      return getForbiddenResponse(res);
    }

    const hasMutation = await mutationService.hasMutation(dnaArray);
    if (hasMutation > 1) {
      mutationService.saveMutation(dnaArray, true);
      return res.status(200).send({ 'hasMutation': true });
    }

    mutationService.saveMutation(dnaArray, false);
    return getForbiddenResponse(res);
  }
};

