module.exports = (hashSet) => ({ emailAddress }) =>
  hashSet.has(emailAddress) ? false : hashSet.add(emailAddress);
