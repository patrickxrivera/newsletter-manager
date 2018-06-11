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

  const user = await query.createUser(tokens, data).catch(next);

  if (!user) return;

  res.redirect(
    keys.frontendRedirect +
      queryString.stringify({
        ...tokens
      })
  );
};

const getMessages = async (req, res, next) => {
  const messageIds = await Gmail.getMessageIdsByQuery(req.body.refreshToken);
  console.log(messageIds);
  res.send({});
};

module.exports = {
  authenticate,
  redirect,
  getMessages
};
