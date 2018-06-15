module.exports = (hashSet) => ({ email }) => (hashSet.has(email) ? false : hashSet.add(email));
