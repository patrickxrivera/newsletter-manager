const db = require('../config');
const itemExists = require('../../utils/exists');
const findUnique = require('../../utils/findUnique');
const handleError = require('../../utils/handleError');

const addNewslettersToLabel = async (req, labelData, next) => {
  await addLabel(req.body, labelData).catch(handleError(next));
  await addEmails(labelData).catch(handleError(next));
  await addLabelEmails(labelData).catch(handleError(next));
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

const addLabelEmail = (labelId) => ({ emailAddress }) => {
  console.log({ labelId, emailAddress });

  return db('label_email').insert({ email_address: emailAddress, label_id: labelId });
};

module.exports = {
  addLabel,
  addEmails,
  addLabelEmails,
  addNewslettersToLabel
};
