const Auth = require('../services/auth');
const Gmail = require('../services/gmailAPI');
const code = require('../utils/statusCodes');

const emails = [
  'kale@hackernewsletter.com',
  'membership@stratechery.com',
  'tyler@tylermcginnis.com',
  'hello@digest.producthunt.com',
  'First Round Review',
  'Social Capital',
  'Angel List'
];

const addNewslettersToLabel = async (req, res, next) => {
  const { labelName, queries } = req.body;

  const updatedTokens = await Auth.updateTokens(req, next);

  if (!updatedTokens) return;

  const labelData = await Gmail.addNewslettersToLabel(updatedTokens, queries, labelName, next);

  res.send(labelData);
};

module.exports = {
  addNewslettersToLabel
};
