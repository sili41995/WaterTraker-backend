const { HydrationEntry } = require('../../models/hydrationEntry');
const { ctrlWrapper } = require('../../utils');

const add = async (req, res, next) => {
  const { _id: owner, dailyWaterRequirement } = req.user;

  const result = await HydrationEntry.create({
    ...req.body,
    owner,
    dailyWaterRequirement,
  });
  result.owner = undefined;

  res.status(201).json(result);
};

module.exports = ctrlWrapper(add);
