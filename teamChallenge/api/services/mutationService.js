var searchMutation = require('../shell/searchMutation');

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

      return await searchMutation.obliqueSearch(dnaArray, count);
    } catch (exception) {
      var error = new Error();
      error.title = 'We have some errors';
      error.message = JSON.stringify(exception);
      error.count = 0;
      throw error;
    }
  },

  saveMutation: (dnaArray, hasMutation) => {
    const dnaModel = {
      dna: dnaArray.toString(),
      hasMutation: hasMutation
    };
    Dna.create(dnaModel).catch((error) => {
      console.error('Error in ORM', error);
    });
  }
};
