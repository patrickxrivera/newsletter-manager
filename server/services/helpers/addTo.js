const Gmail = require('../gmailAPI');

const addToHashMap = (hashMap) => ([{ value }]) => {
  const email = extractEmail(value);

  if (isInvalid(email)) return;

  const newsletterName = value.split('<')[0].trim();

  hashMap.set(newsletterName, email);
};

const extractEmail = (value) => {
  const regExp = /\<([^)]+)\>/;

  const match = regExp.exec(value);

  return match ? match[1] : null;
};

const isInvalid = (email) => !email || isPersonal(email);

const isPersonal = (email) => email.includes('@gmail.com') || email.includes('.edu');

const addToStore = (store) => (emailAddress, accountName) =>
  store.push({ accountName, emailAddress });

module.exports = {
  addToHashMap,
  addToStore
};
