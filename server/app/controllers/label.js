const Auth = require('../services/auth');
const Gmail = require('../services/gmailAPI');
const code = require('../utils/statusCodes');
const query = require('../db/queries');
const handleError = require('../utils/handleError');

// TODO: change "id" to "userId"

const addNewslettersToLabel = async (req, res, next) => {
  const { labelName, queries, id } = req.body;

  const { credentials } = await Auth.updateTokens(id, next).catch(handleError(next));

  const labelData = await Gmail.addNewslettersToLabel(credentials, queries, labelName, next).catch(
    handleError(next)
  );

  res.send(labelData);

  await Promise.all([
    Gmail.addFilter(labelData),
    query.updateUser(credentials, id).catch(next),
    query.addNewslettersToLabel(req, labelData, next)
  ]);
};

const deleteLabel = async (req, res, next) => {
  const { id, labelId } = req.query;

  const { credentials } = await Auth.updateTokens(id, next).catch(handleError(next));

  await Promise.all([
    Gmail.deleteLabel(credentials, labelId),
    query.updateUser(credentials, id),
    query.deleteLabel(id, labelId)
  ]);

  res.send({ success: true });
};

const getLabels = async (req, res, next) => {
  const { userId } = req.query;

  const labels = await query.getLabels(userId, next).catch(handleError(next));

  res.send(labels);
};

module.exports = {
  addNewslettersToLabel,
  deleteLabel,
  getLabels
};
