const Auth = require('../services/auth');
const Gmail = require('../services/gmailAPI');
const code = require('../utils/statusCodes');
const query = require('../db/queries');
const handleError = require('../utils/handleError');

const addNewslettersToLabel = async (req, res, next) => {
  const { labelName, queries, id } = req.body;

  const updatedTokens = await Auth.updateTokens(req, next).catch(handleError(next));

  const labelData = await Gmail.addNewslettersToLabel(
    updatedTokens,
    queries,
    labelName,
    next
  ).catch(handleError(next));

  res.send(labelData);

  query.addNewslettersToLabel(req, labelData, next);
};

module.exports = {
  addNewslettersToLabel
};
