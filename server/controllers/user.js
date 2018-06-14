const queryString = require('querystring');

const query = require('../db/queries');
const keys = require('../keys');
const Auth = require('../services/auth');
const Gmail = require('../services/gmailAPI');

const authenticate = async (req, res) => {
  const authURL = Auth.getAuthURL();
  res.redirect(authURL);
};

const redirect = async (req, res, next) => {
  const tokens = await Auth.getCredentials(req);
  const { data } = await Gmail.getProfile(tokens);

  const [id] = await query.createUser(tokens, data).catch(next);

  if (!id) return;

  res.redirect(keys.frontendRedirect + queryString.stringify({ ...id }));
};

const getInitialEmails = async (req, res, next) => {
  const updatedTokens = await Auth.updateTokens(req, next);

  if (!updatedTokens) return;

  const newsletters = await Gmail.getInitialEmails(updatedTokens, next);

  res.send(newsletters);
};

module.exports = {
  authenticate,
  redirect,
  getInitialEmails
};
