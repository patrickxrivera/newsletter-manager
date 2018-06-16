const db = require('../config');
const itemExists = require('../../utils/exists');
const findUnique = require('../../utils/findUnique');
const handleError = require('../../utils/handleError');

const addNewslettersToLabel = async (req, labelData) => {
  await addLabel(req.body, labelData);
  await addLabelEmails(labelData);
};

const addLabel = (user, { labelId }) =>
  db('label').insert({ id: labelId, name: user.labelName, user_id: user.id });

const addLabelEmails = ({ addedNewsletters, labelId }) => {
  const uniqueNewsletters = addedNewsletters.filter(findUnique(new Set()));

  return Promise.all(uniqueNewsletters.map(addLabelEmail(labelId)));
};

const addLabelEmail = (labelId) => ({ emailAddress, accountName }) =>
  db('label_email').insert({
    email_address: emailAddress,
    account_name: accountName,
    label_id: labelId
  });

const deleteLabel = async (userId, labelId) => {
  await db('label_email')
    .where({ label_id: labelId })
    .del();

  // TODO: update once label PK is changed to composite PK
  return db('label')
    .where({ id: labelId, user_id: userId })
    .del();
};

const getLabels = async (userId, next) => {
  const labels = await db('label')
    .select(['id', 'name'])
    .where({ user_id: userId })
    .catch(handleError(next));

  return Promise.all(labels.map(getLabelEmails));
};

const getLabelEmails = async ({ id, name }) => {
  const labelEmails = await db('label_email')
    .select(['email_address', 'account_name'])
    .where('label_id', id);

  const formattedLabelEmails = labelEmails.reduce(applyFormat, []);

  return { labelId: id, labelName: name, addedNewsletters: formattedLabelEmails };
};

const applyFormat = (acc, { email_address, account_name }) => [
  ...acc,
  {
    emailAddress: email_address,
    accountName: account_name
  }
];

module.exports = {
  addNewslettersToLabel,
  deleteLabel,
  getLabels
};
