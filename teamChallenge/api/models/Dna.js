module.exports = {
  attributes: {
    id: {
      type: 'number',
      unique: true,
      columnName: 'DnaId'
    },
    dna: {
      type: 'string',
      columnName: 'DnaVerified'
    },
    hasMutation: {
      type: 'boolean',
      columnName: 'hasMutation'
    }
  },

  getDnaWithMutation: async () => {
    return await Dna.count()
      .where({ hasMutation: true });
  },

  getDnaWithoutMutation: async () => {
    return await Dna.count()
      .where({ hasMutation: false });
  },
};
