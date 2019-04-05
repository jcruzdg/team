module.exports = {
  attributes: {
    _id: {
      type: 'string',
      unique: true,
      autoIncrement: true,
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
