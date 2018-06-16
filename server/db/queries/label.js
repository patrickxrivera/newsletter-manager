const db = require('../config');
const itemExists = require('../../utils/exists');
const findUnique = require('../../utils/findUnique');
const handleError = require('../../utils/handleError');

const addNewslettersToLabel = async (req, labelData) => {
  await addLabel(req.body, labelData);
  await addEmails(labelData);
  await addLabelEmails(labelData);
};

const addLabel = (user, { labelId }) =>
  db('label').insert({ id: labelId, name: user.labelName, user_id: user.id });

const addEmails = ({ addedNewsletters }) => {
  const uniqueNewsletters = addedNewsletters.filter(findUnique(new Set()));

  return Promise.all(uniqueNewsletters.map(addEmail));
};

const addEmail = async ({ accountName, emailAddress }) => {
  const email = await db('email')
    .select('email_address')
    .where('email_address', emailAddress);

  if (itemExists(email)) return;

  return db('email')
    .insert({ account_name: accountName, email_address: emailAddress })
    .returning('email_address');
};

const addLabelEmails = ({ addedNewsletters, labelId }) => {
  const uniqueNewsletters = addedNewsletters.filter(findUnique(new Set()));

  return Promise.all(uniqueNewsletters.map(addLabelEmail(labelId)));
};

const addLabelEmail = (labelId) => ({ emailAddress }) =>
  db('label_email').insert({ email_address: emailAddress, label_id: labelId });

const deleteLabel = async (userId, labelId) => {
  await db('label_email')
    .where({ label_id: labelId })
    .del();

  // TODO: update once label PK is changed to composite PK
  return db('label')
    .where({ id: labelId, user_id: userId })
    .del();
};

module.exports = {
  addLabel,
  addEmails,
  addLabelEmails,
  addNewslettersToLabel,
  deleteLabel
};
