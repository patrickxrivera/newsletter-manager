const queryString = require('querystring');

const query = require('../db/queries');
const keys = require('../keys');
const Auth = require('../services/auth');
const Gmail = require('../services/gmailAPI');
const handleError = require('../utils/handleError');

const authenticate = async (req, res) => {
  const authURL = Auth.getAuthURL();
  res.redirect(authURL);
};

const redirect = async (req, res, next) => {
  const tokens = await Auth.getCredentials(req);

  const { data } = await Gmail.getProfile(tokens);

  const id = await query.handleCreateUser(tokens, data).catch(handleError(next));

  res.redirect(keys.frontendRedirect + queryString.stringify({ id }));
};

const getInitialEmails = async (req, res, next) => {
  const [accessToken] = await query.getAccessToken(req.body.id).catch(handleError(next));

  const newsletters = await Gmail.getInitialEmails(accessToken, next);

  res.send(newsletters);
};

module.exports = {
  authenticate,
  redirect,
  getInitialEmails
};
