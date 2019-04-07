const searchMutation = require('../shell/searchMutation');
const customException = (exception) => {
  var error = new Error();
  error.title = 'We have some errors';
  error.message = exception.message;
  error.message = exception.stack;
  error.count = 0;
  console.error(error);
  return error;
};

module.exports = {
  hasMutation: async (dnaArray) => {
    try {
      var count = await searchMutation.horizontalSearch(dnaArray);
      if (count > 1) {
        return count;
      }

      count = await searchMutation.verticalSearch(dnaArray, count);
      if (count > 1) {
        return count;
      }

      return await searchMutation.obliqueSearchTwo(dnaArray, count);
    } catch (exception) {
      throw customException(exception);
    }
  },

  saveMutation: (dnaArray, hasMutation) => {
    const dnaModel = {
      dna: dnaArray.toString(),
      hasMutation: hasMutation
    };
    Dna.create(dnaModel).catch((error) => {
      throw customException(error);
    });
  }
};
