module.exports = {
  getMutationsRatio: async () => {
    const dnasWithMutation = await Dna.getDnaWithMutation();
    const dnasWithoutMutation = await Dna.getDnaWithoutMutation();
    const dnaStats = {
      countMutations: dnasWithMutation,
      countNoMutation: dnasWithoutMutation,
      ratio: (dnasWithMutation / dnasWithoutMutation)
    };

    return dnaStats;
  },
};
