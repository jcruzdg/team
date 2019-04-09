/**
 * StatsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getStats: async (req, res) => {
    const stats = await statsService.getMutationsRatio();
    return res.status(200).send(stats);
  }
};
