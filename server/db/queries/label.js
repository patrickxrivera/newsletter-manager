const db = require('../config');
const itemExists = require('../../utils/exists');
const findUnique = require('../../utils/findUnique');

const addLabel = ({ labelName, id }) => db('label').insert({ name: labelName, user_id: id }, 'id');

const addEmails = ({ addedNewsletters }) => Promise.all(addedNewsletters.map(addEmail));

const addEmail = async ({ accountName, emailAddress }) => {
  const emailExists = await db('email')
    .select('email_address')
    .where('email_address', emailAddress);
  console.log(emailExists);
  if (itemExists(emailExists)) return;

  return db('email')
    .insert({ account_name: accountName, email_address: emailAddress })
    .returning('email_address');
};

const addLabelEmails = async ({ addedNewsletters, labelId }) => {
  const uniqueNewsletters = addedNewsletters.filter(findUnique(new Set()));

  return Promise.all(addedNewsletters.map(addLabelEmail(labelId)));
};

const addLabelEmail = (labelId) => async ({ emailAddress }) => {
  console.log({ labelId, emailAddress });
  return db('label_email').insert({ email_address: emailAddress, label_id: labelId });
};

module.exports = {
  addLabel,
  addEmails,
  addLabelEmails
};
