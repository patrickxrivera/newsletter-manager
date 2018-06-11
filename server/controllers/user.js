const queryString = require('querystring');

const keys = require('../keys');
const Auth = require('../services/auth');

const authenticate = async (req, res) => {
  const authURL = Auth.getAuthURL();
  res.redirect(authURL);
};

const redirect = async (req, res, next) => {
  const tokens = await Auth.getCredentials(req);

  res.redirect(
    keys.frontendRedirect +
      queryString.stringify({
        ...tokens
      })
  );
};

const getMessages = async (req, res, next) => {
  // const messageIds = await Auth.getMessageIdsByQuery().catch(next);

  res.send({});
};

module.exports = {
  authenticate,
  redirect,
  getMessages
};
