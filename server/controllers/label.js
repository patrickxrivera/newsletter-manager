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

  query.updateUser(credentials, id).catch(next);

  query.addNewslettersToLabel(req, labelData, next);
};

const deleteLabel = async (req, res, next) => {
  const { id, labelId } = req.query;

  const { credentials } = await Auth.updateTokens(id, next).catch(handleError(next));

  await Gmail.deleteLabel(credentials, labelId).catch(handleError(next));

  res.send({ success: true });

  query.updateUser(credentials, id).catch(next);

  query.deleteLabel(id, labelId);
};

const getLabels = async (req, res, next) => {
  const { id } = req.query;

  const labels = await query.getLabels(id, next).catch(handleError(next));

  res.send(labels);
};

module.exports = {
  addNewslettersToLabel,
  deleteLabel,
  getLabels
};
